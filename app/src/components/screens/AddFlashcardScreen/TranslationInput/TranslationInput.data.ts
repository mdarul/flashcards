import { Language } from '@models/enums';
import React from 'react';

export default interface TranslationInputProps {
	text: string;
	setText: React.Dispatch<React.SetStateAction<string>>;
	language: Language;
	placeholder: string;
	style?: object;
}
