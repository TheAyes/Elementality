import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store.ts";
import { Spell } from "../../game/spell.ts";

export interface SpellSliceState {
	spells: Spell[];
}

const initialState: SpellSliceState = {
	spells: [
		new Spell({
			id: "fire",
			name: "Fire",
			description: "Empty for now",
			cost: 1,
			damage: 2
		}),
		new Spell({
			id: "water",
			name: "Water",
			description: "Empty for now",
			cost: 1,
			damage: 1
		}),
		new Spell({
			id: "earth",
			name: "Earth",
			description: "Empty for now",
			cost: 1,
			damage: 1
		}),
		new Spell({
			id: "wind",
			name: "Wind",
			description: "Empty for now",
			cost: 1,
			damage: 1
		})
	]
};

export const spellSlice = createSlice({
	name: "spell",
	initialState,
	reducers: {
		addSpell: (state, action: PayloadAction<Spell>) => {
			state.spells.push(action.payload);
		},
		removeSpell: (state, action: PayloadAction<Spell["id"]>) => {
			state.spells = state.spells.filter(
				(spell) => spell.id !== action.payload
			);
		}
	}
});

export const selectSpellById = (state: RootState, spellIdToFind: Spell["id"]) =>
	state.spell.spells.find(
		(currentSpell) => currentSpell.id === spellIdToFind
	);

// Action creators are generated for each case reducer function
export const { addSpell, removeSpell } = spellSlice.actions;

export default spellSlice.reducer;
