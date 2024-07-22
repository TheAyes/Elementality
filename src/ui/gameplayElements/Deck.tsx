import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { FC } from "react";
import { useAppSelector } from "../../app/hooks.ts";
import Card from "./Card.tsx";

type DeckProps = {
	[key: string]: any;
};

const StyledDeck = styled("div")<Partial<DeckProps>>(() => {
	const theme = useTheme();
	return css`
		position: absolute;
		bottom: 1rem;
		left: 1rem;
		right: 1rem;
		justify-content: center;

		display: flex;
		gap: 1em;
	`;
});

export const Deck: FC<DeckProps> = ({ ...props }) => {
	const spells = useAppSelector((state) => state.spell.spells);

	return (
		<StyledDeck {...props}>
			{spells.map((spell, index) => {
				return (
					<Card
						id={`${spell.id}-${index}`}
						spell={spell}
						key={spell.id}
					/>
				);
			})}
		</StyledDeck>
	);
};

export default Deck;
