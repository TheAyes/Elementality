import { useDraggable } from "@dnd-kit/core";
import { CSS, Transform } from "@dnd-kit/utilities";
import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { FC } from "react";
import { Spell } from "../../game/spell.ts";

type CardProps = {
	spell?: Spell;
	[key: string]: any;
};

const StyledCard = styled("div")<
	Partial<CardProps> & { transform: Transform | null }
>(({ transform }) => {
	const theme = useTheme();
	return css`
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex: 0 0 10em;

		height: 20rem;
		padding: 0.4em;
		//transition: transform 200ms ease;
		border: 4px solid rgba(255, 255, 255, 0.2);

		border-radius: 8px;

		background: rgb(20, 20, 20);

		transform: ${CSS.Transform.toString(transform)};

		/*&:hover {
		\t\ttransform: scale(140%) translateY(-20%);
		\t\tz-index: 10;
		\t}*/

		& > hgroup {
			display: flex;
			align-items: center;
			justify-content: space-around;

			& > h3 {
				flex: 1;
				text-align: center;
			}
		}

		.icon {
			align-self: center;
			width: 2.5em;
			background: red;
			aspect-ratio: 1/1;
		}

		& > div {
			display: flex;
			justify-content: space-between;

			& > .cost {
				display: flex;
				align-items: center;
				justify-content: center;

				width: 2em;

				height: auto;
				text-align: center;
				border: 2px solid rgba(255, 255, 255, 0.4);
				border-radius: 100vw;
				background: rgba(0, 80, 255);
				aspect-ratio: 1/1;
			}

			& > .damage {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 2em;

				height: auto;
				text-align: center;
				border: 2px solid rgba(255, 255, 255, 0.4);
				border-radius: 100vw;
				background: rgba(255, 80, 0);
				aspect-ratio: 1/1;
			}
		}
	`;
});

export const Card: FC<CardProps> = ({
	spell = new Spell(),
	...props
}) => {
	const { attributes, listeners, transform, setNodeRef } =
		useDraggable({
			id: spell.id,
			data: {
				spell: spell
			}
		});

	return (
		<StyledCard
			{...props}
			ref={setNodeRef}
			transform={transform}
			{...listeners}
			{...attributes}
		>
			<hgroup>
				<div className="icon"></div>
				<h3>{spell.name}</h3>
			</hgroup>

			<div>
				<p className="cost">{spell.cost}</p>
				<p className="damage">{spell.damage}</p>
			</div>
		</StyledCard>
	);
};

export default Card;
