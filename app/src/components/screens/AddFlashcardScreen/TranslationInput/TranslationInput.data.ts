import React from 'react';
import Language from '../../../../models/enums/language';

export default interface TranslationInputProps {
	text: string;
	setText: React.Dispatch<React.SetStateAction<string>>;
	language: Language;
	placeholder: string;
	style?: object;
}
