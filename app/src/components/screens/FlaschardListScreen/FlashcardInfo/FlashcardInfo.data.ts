import FlashcardModel from '../../../../models/dataModels/flashcardModel';

export default interface FlashcardInfoProps {
	flashcard: FlashcardModel;
	onDeletePressed: (flashcard: FlashcardModel) => void;
	onEditPressed: (flashcard: FlashcardModel) => void;
	style?: object;
}
