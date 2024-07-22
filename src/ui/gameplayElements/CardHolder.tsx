import { useDroppable } from "@dnd-kit/core";
import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { FC, ReactNode } from "react";

type CardHolderProps = {
	children?: ReactNode;
	id?: string;
	[key: string]: any;
};

const StyledCardHolder = styled("div")<
	Partial<CardHolderProps> & { isOver: boolean }
>(({ isOver }) => {
	const theme = useTheme();
	return css`
		width: 10em;
		height: 15em;
		border: 2px solid rgba(255, 255, 255, 0.5);

		box-shadow: ${isOver
			? "box-shadow: white 0 0 16px"
			: ""};
	`;
});

export const CardHolder: FC<CardHolderProps> = ({
	children,
	activeSpell,
	...props
}) => {
	const { isOver, setNodeRef } = useDroppable({
		id: "cardHolder"
	});
	return (
		<StyledCardHolder
			{...props}
			isOver={isOver}
			ref={setNodeRef}
		>
			{children}
		</StyledCardHolder>
	);
};

export default CardHolder;
