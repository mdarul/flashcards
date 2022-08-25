import FlashcardModel from '../../../../models/dataModels/flashcardModel';

export interface FlashcardDataEditModalProps {
	isVisible: boolean;
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
	flashcard: FlashcardModel;
	setFlashcard: React.Dispatch<React.SetStateAction<FlashcardModel>>;
	onSave: () => void;
	onClose: () => void;
}
