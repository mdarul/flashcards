import Language from '../enums/language';

export default interface FlashcardCollectionCreateEditData {
	name: string;
	firstLanguage: Language;
	secondLanguage: Language;
}
