/* eslint-disable no-param-reassign */
import {
	FlashcardCollectionCreateEditData,
	FlashcardCollectionModel,
	FlashcardModel,
	FlashcardModelDto,
} from '@models/dataModels';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FlashcardAndCollectionPayload {
	flashcard: FlashcardModel;
	flashcardCollection: FlashcardCollectionModel;
}

export interface FlashcardDtoAndCollectionPayload {
	flashcardDto: FlashcardModelDto;
	flashcardCollection: FlashcardCollectionModel;
}

interface FlashcardCollections {
	flashcardCollections: FlashcardCollectionModel[];
	selectedFlashcardCollectionId: number | null;
}

const initialState: FlashcardCollections = {
	flashcardCollections: [],
	selectedFlashcardCollectionId: null,
};

export const flashcardCollectionsSlice = createSlice({
	name: 'flashcardCollections',
	initialState,
	reducers: {
		setFlashcardCollections: (state, action: PayloadAction<FlashcardCollectionModel[]>) => {
			state.flashcardCollections = action.payload;
		},
		setSelectedFlashcardCollectionId: (state, action: PayloadAction<number>) => {
			state.selectedFlashcardCollectionId = action.payload;
		},
		createFlashcardCollection: (state, action: PayloadAction<FlashcardCollectionCreateEditData>) => {
			const ids = state.flashcardCollections.map(o => o.id);
			const newId = ids.length ? Math.max(...ids) + 1 : 0;
			state.flashcardCollections.push({
				id: newId,
				name: action.payload.name,
				firstLanguage: action.payload.firstLanguage,
				secondLanguage: action.payload.secondLanguage,
				flashcards: [],
			});
		},
		removeFlashcardCollection: (state, action: PayloadAction<number>) => {
			state.flashcardCollections = state.flashcardCollections.filter(o => o.id !== action.payload);
		},
		editFlashcardCollection: (state, action: PayloadAction<FlashcardCollectionModel>) => {
			const element = state.flashcardCollections.find(o => o.id === action.payload.id);
			if (element) {
				const index = state.flashcardCollections.indexOf(element);
				state.flashcardCollections[index] = action.payload;
			}
			return state;
		},
		addFlashcardToCollection: (state, action: PayloadAction<FlashcardDtoAndCollectionPayload>) => {
			const ids = state.flashcardCollections.flatMap(o => o.flashcards).map(o => o.id);
			const newId = ids.length ? Math.max(...ids) + 1 : 0;
			state.flashcardCollections
				.find(collection => collection.id === action.payload.flashcardCollection.id)
				?.flashcards.push({ ...action.payload.flashcardDto, id: newId });
			return state;
		},
		removeFlashcardFromCollection: (state, action: PayloadAction<FlashcardAndCollectionPayload>) => {
			const flashcardCollectionIndex = state.flashcardCollections.findIndex(
				o => o.id === action.payload.flashcardCollection.id,
			);

			if (flashcardCollectionIndex !== -1) {
				state.flashcardCollections[flashcardCollectionIndex].flashcards = state.flashcardCollections[
					flashcardCollectionIndex
				].flashcards.filter(
					o => o.text !== action.payload.flashcard.text || o.translatedText !== action.payload.flashcard.translatedText,
				);
			}

			return state;
		},
		editFlashcardInCollection: (state, action: PayloadAction<FlashcardAndCollectionPayload>) => {
			const element = state.flashcardCollections.flatMap(o => o.flashcards).find(o => o.id === action.payload.flashcard.id);
			if (element) {
				element.text = action.payload.flashcard.text;
				element.translatedText = action.payload.flashcard.translatedText;
			}
			return state;
		},
	},
});

export const {
	setFlashcardCollections,
	setSelectedFlashcardCollectionId,
	createFlashcardCollection,
	editFlashcardCollection,
	removeFlashcardCollection,
	addFlashcardToCollection,
	removeFlashcardFromCollection,
	editFlashcardInCollection,
} = flashcardCollectionsSlice.actions;

export default flashcardCollectionsSlice.reducer;
