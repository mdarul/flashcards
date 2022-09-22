import { Language } from '@models/enums';
import PolishFlag from '../../assets/flags/pl.png';
import EnglishFlag from '../../assets/flags/gb.png';
import NorthKoreaFlag from '../../assets/flags/kp.png';

export const languageToFlagImage = (language: Language) => {
	switch (language) {
		case Language.ENGLISH:
			return EnglishFlag;
		case Language.POLISH:
			return PolishFlag;
		default:
			return NorthKoreaFlag;
	}
};
