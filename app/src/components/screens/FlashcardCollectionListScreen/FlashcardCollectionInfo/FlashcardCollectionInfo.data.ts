import FlashcardCollectionModel from '../../../../models/dataModels/flashcardCollectionModel';

export default interface FlashcardCollectionInfoProps {
	flashcardCollection: FlashcardCollectionModel;
	onDeletePressed: (collection: FlashcardCollectionModel) => void;
	onEditPressed: (collection: FlashcardCollectionModel) => void;
	style?: object;
}
