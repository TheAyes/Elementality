import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { FC } from "react";
import CardHolder from "./CardHolder.tsx";

type BoardProps = {
	[key: string]: any;
};

const StyledBoard = styled("div")<Partial<BoardProps>>(
	() => {
		const theme = useTheme();
		return css`
			display: flex;
			position: absolute;
			top: 50%;
			left: 50%;
			translate: -50% -50%;
			gap: 2em;
		`;
	}
);

export const Board: FC<BoardProps> = ({ ...props }) => {
	return (
		<StyledBoard {...props}>
			<CardHolder id={"1"} />
			<CardHolder id={"2"} />
		</StyledBoard>
	);
};

export default Board;
