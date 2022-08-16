import FlashcardCollectionCreateEditData from '../../../../models/dataModels/flashcardCollectionCreateEditData';

export interface CollectionDataInputModalProps {
	isVisible: boolean;
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
	collectionData: FlashcardCollectionCreateEditData;
	setCollectionData: React.Dispatch<React.SetStateAction<FlashcardCollectionCreateEditData>>;
	onSave: () => void;
	onClose: () => void;
}
