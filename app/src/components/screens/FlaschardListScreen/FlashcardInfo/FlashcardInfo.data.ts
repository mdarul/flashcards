import { FlashcardModel } from '@models/dataModels';

export default interface FlashcardInfoProps {
	flashcard: FlashcardModel;
	onDeletePressed: (flashcard: FlashcardModel) => void;
	onEditPressed: (flashcard: FlashcardModel) => void;
	style?: object;
}
