import { FlashcardModel } from '@models/dataModels';

export interface FlashcardDataEditModalProps {
	isVisible: boolean;
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
	flashcard: FlashcardModel | null;
	setFlashcard: React.Dispatch<React.SetStateAction<FlashcardModel | null>>;
	onSave: () => void;
	onClose: () => void;
}
