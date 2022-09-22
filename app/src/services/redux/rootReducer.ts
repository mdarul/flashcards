import { combineReducers } from '@reduxjs/toolkit';
import { flashcardCollectionsReducer, userSettingsReducers } from './slices';

const rootReducer = combineReducers({
	flashcardCollectionsReducer,
	userSettingsReducers,
});

export default rootReducer;
