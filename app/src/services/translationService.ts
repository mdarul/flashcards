import translations from '../../translations.json';
import Language from '../models/enums/language';
import LanguageFullName from '../models/enums/languageFullName';

export const translate = (translationKey: string, language: Language): string => {
	return (
		translations.find(translation => translation.key === translationKey)?.values.find(o => o.language === language)?.value ??
		''
	);
};

export const shortLanguageToFullName = (language: Language): LanguageFullName => {
	switch (language) {
		case Language.ENGLISH:
			return LanguageFullName.ENGLISH;
		case Language.POLISH:
			return LanguageFullName.POLISH;
		default:
			return LanguageFullName.ENGLISH;
	}
};
