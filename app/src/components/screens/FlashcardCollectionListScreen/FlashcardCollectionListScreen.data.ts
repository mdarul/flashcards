import { FlashcardCollectionCreateEditData } from '@models/dataModels';
import { Language } from '@models/enums';

export const emptyFlashcardCollectionCreateEditData: FlashcardCollectionCreateEditData = {
	name: '',
	firstLanguage: Language.ENGLISH,
	secondLanguage: Language.ENGLISH,
};
