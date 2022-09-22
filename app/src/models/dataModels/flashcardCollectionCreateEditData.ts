import { Language } from '@models/enums';

export interface FlashcardCollectionCreateEditData {
	name: string;
	firstLanguage: Language;
	secondLanguage: Language;
}
