import {
	DndContext,
	DragEndEvent,
	UniqueIdentifier
} from "@dnd-kit/core";
import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { FC, useState } from "react";
import { useAppSelector } from "../app/hooks.ts";
import { Spell } from "../game/spell.ts";
import Card from "./gameplayElements/Card.tsx";
import CardHolder from "./gameplayElements/CardHolder.tsx";

type GameProps = {
	[key: string]: any;
};

const StyledGame = styled("div")<Partial<GameProps>>(() => {
	const theme = useTheme();
	return css`
		#board {
			display: flex;
			position: absolute;
			top: 50%;
			left: 50%;
			translate: -50% -50%;
			gap: 2em;
		}

		#deck {
			position: absolute;
			bottom: 1rem;
			left: 1rem;
			right: 1rem;
			justify-content: center;

			display: flex;
			gap: 1em;
		}
	`;
});

export const InGame: FC<GameProps> = ({ ...props }) => {
	const spells = useAppSelector(
		(state) => state.spell.spells
	);

	const [parent, setParent] = useState(
		null as null | UniqueIdentifier
	);

	let activeSpell: Spell;

	const handleDragEnd = (event: DragEndEvent) => {
		const { over } = event;

		activeSpell = event.active.data.spell;

		// If the item is dropped over a container, set it as the parent
		// otherwise reset the parent to `null`
		setParent(over ? over.id : null);
	};

	return (
		<StyledGame {...props}>
			<DndContext
				onDragEnd={handleDragEnd}
				autoScroll={false}
			>
				<div id="board">
					{["A", "B", "C"].map((id) => {
						return (
							<CardHolder id={id} key={id}>
								{parent === id ? (
									<Card
										spell={activeSpell}
									/>
								) : null}
							</CardHolder>
						);
					})}
				</div>
				{/*<Board />*/}
				<div id="deck">
					{spells.map((spell, index) => {
						const id = `${spell.id}-${index}`;
						return (
							<Card
								id={id}
								spell={spell}
								key={id}
							/>
						);
					})}
				</div>
				{/*<Deck />*/}
			</DndContext>
		</StyledGame>
	);
};

export default InGame;
