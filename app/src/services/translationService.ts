import { Language, LanguageFullName } from '@models/enums';
import translations from '../../translations.json';

export const translate = (translationKey: string, language: Language): string => {
	return (
		translations.find(translation => translation.key === translationKey)?.values.find(o => o.language === language)?.value ??
		''
	);
};

export const getLanguageFullName = (language: Language): LanguageFullName => {
	switch (language) {
		case Language.ENGLISH:
			return LanguageFullName.ENGLISH;
		case Language.POLISH:
			return LanguageFullName.POLISH;
		default:
			return LanguageFullName.ENGLISH;
	}
};
