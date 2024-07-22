import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks.ts";
import { startGame } from "../features/game/gameSlice.tsx";
import MenuEntry from "./MenuEntry.tsx";

type MainMenuProps = {
	[key: string]: any;
};

const StyledMainMenu = styled("div")<Partial<MainMenuProps>>(() => {
	const theme = useTheme();
	return css`
		position: absolute;
		inset: 0;

		& > div {
			position: absolute;
			bottom: 1rem;
			left: 1rem;

			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
	`;
});

export const MainMenu: FC<MainMenuProps> = ({ ...props }) => {
	const game = useAppSelector((state) => state.game);
	const dispatch = useAppDispatch();

	return (
		<StyledMainMenu {...props}>
			<div>
				<MenuEntry
					caption="Play"
					onClick={() => {
						dispatch(startGame());
					}}
				/>
				<MenuEntry caption="Options" />
				<MenuEntry caption="Exit" />
			</div>
		</StyledMainMenu>
	);
};

export default MainMenu;
