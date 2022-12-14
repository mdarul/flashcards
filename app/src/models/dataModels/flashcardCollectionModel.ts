import { Language } from '../enums/language';
import { FlashcardModel } from './flashcardModel';

export interface FlashcardCollectionModel {
	id: number;
	name: string;
	flashcards: FlashcardModel[];
	firstLanguage: Language;
	secondLanguage: Language;
}
