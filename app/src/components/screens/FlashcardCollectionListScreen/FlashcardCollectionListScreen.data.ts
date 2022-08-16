import FlashcardCollectionCreateEditData from '../../../models/dataModels/flashcardCollectionCreateEditData';
import Language from '../../../models/enums/language';

export const emptyFlashcardCollectionCreateEditData: FlashcardCollectionCreateEditData = {
	name: '',
	firstLanguage: Language.ENGLISH,
	secondLanguage: Language.ENGLISH,
};
