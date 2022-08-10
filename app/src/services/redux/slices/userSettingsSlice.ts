import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Language from '../../../models/enums/language';

interface UserSettings {
	language: Language;
}

const initialState: UserSettings = {
	language: Language.ENGLISH
};

export const userSettingsSlice = createSlice({
	name: 'userSettings',
	initialState,
	reducers: {
		setLanguage: (state, action: PayloadAction<Language>) => {
			state.language = action.payload;
		},
	},
});

export const { setLanguage } = userSettingsSlice.actions;

export default userSettingsSlice.reducer;
