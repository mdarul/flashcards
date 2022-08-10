import { combineReducers } from '@reduxjs/toolkit';
import flashcardCollectionsReducer from './slices/flashcardCollectionsSlice';
import userSettingsReducers from './slices/userSettingsSlice';

const rootReducer = combineReducers({
	flashcardCollectionsReducer,
	userSettingsReducers
});

export default rootReducer;
