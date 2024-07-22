import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { FC } from "react";
import { useAppSelector } from "./app/hooks.ts";
import { gameStateComponents } from "./features/game/gameSlice.tsx";
import GlobalStyles from "./GlobalStyles.tsx";

type AppProps = {
	[key: string]: any;
};

const StyledApp = styled("div")<Partial<AppProps>>(() => {
	const theme = useTheme();
	return css`
		position: absolute;
		inset: 0;
		background: black;
	`;
});

export const App: FC<AppProps> = ({ ...props }) => {
	const gameState = useAppSelector((state) => state.game.gameState);

	return (
		<>
			<GlobalStyles />

			<StyledApp {...props}>{gameStateComponents[gameState]}</StyledApp>
		</>
	);
};

export default App;
