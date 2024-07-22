import { createSlice } from "@reduxjs/toolkit";
import InGame from "../../ui/InGame.tsx";
import MainMenu from "../../ui/MainMenu.tsx";

export const gameStateComponents = {
	MainMenu: <MainMenu />,
	InGame: <InGame />
};

export interface GameSliceState {
	gameState: keyof typeof gameStateComponents;
}

const initialState: GameSliceState = {
	gameState: "MainMenu"
};

export const gameSlice = createSlice({
	name: "game",
	initialState,
	reducers: {
		startGame: (state) => {
			state.gameState = "InGame";
		},
		stopGame: (state) => {
			state.gameState = "MainMenu";
		}
	}
});

// Action creators are generated for each case reducer function
export const { startGame } = gameSlice.actions;

export default gameSlice.reducer;
