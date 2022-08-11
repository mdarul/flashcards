/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import FlashcardCollectionModel from '../../../models/dataModels/flashcardCollectionModel';
import FlashcardModel from '../../../models/dataModels/flashcardModel';

export interface AddFlashcardToCollectionPayload {
	flashcard: FlashcardModel;
	flashcardCollection: FlashcardCollectionModel;
}

interface FlashcardCollections {
	flashcardCollections: FlashcardCollectionModel[];
}

const initialState: FlashcardCollections = {
	flashcardCollections: [],
};

export const flashcardCollectionsSlice = createSlice({
	name: 'flashcardCollections',
	initialState,
	reducers: {
		setFlashcardCollections: (state, action: PayloadAction<FlashcardCollectionModel[]>) => {
			state.flashcardCollections = action.payload;
		},
		createFlashcardCollection: (state, action: PayloadAction<string>) => {
			const ids = state.flashcardCollections.map(o => o.id);
			const newId = ids.length ? Math.max(...ids) + 1 : 0;
			state.flashcardCollections.push({ id: newId, name: action.payload, flashcards: [] });
		},
		removeFlashcardCollection: (state, action: PayloadAction<number>) => {
			state.flashcardCollections = state.flashcardCollections.filter(o => o.id !== action.payload);
		},
		addFlashcardToCollection: (state, action: PayloadAction<AddFlashcardToCollectionPayload>) => {
			state.flashcardCollections
				.find(collection => collection === action.payload.flashcardCollection)
				?.flashcards.push(action.payload.flashcard);
			return state;
		},
		editFlascardCollection: (state, action: PayloadAction<FlashcardCollectionModel>) => {
			const element = state.flashcardCollections.find(o => o.id === action.payload.id);
			if (element) {
				const index = state.flashcardCollections.indexOf(element);
				state.flashcardCollections[index] = action.payload;
			}
			return state;
		},
	},
});

export const {
	setFlashcardCollections,
	createFlashcardCollection,
	removeFlashcardCollection,
	addFlashcardToCollection,
	editFlascardCollection,
} = flashcardCollectionsSlice.actions;

export default flashcardCollectionsSlice.reducer;
