import FlashcardCollectionCreateEditData from '../../../models/dataModels/flashcardCollectionCreateEditData';
import Language from '../../../models/enums/language';

export const emptyCollectionCreateEditData: FlashcardCollectionCreateEditData = {
	name: '',
	firstLanguage: Language.ENGLISH,
	secondLanguage: Language.ENGLISH,
};
