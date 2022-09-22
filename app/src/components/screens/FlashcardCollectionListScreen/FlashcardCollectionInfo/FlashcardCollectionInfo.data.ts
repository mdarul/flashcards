import { FlashcardCollectionModel } from '@models/dataModels';

export default interface FlashcardCollectionInfoProps {
	flashcardCollection: FlashcardCollectionModel;
	onDeletePressed: (collection: FlashcardCollectionModel) => void;
	onEditPressed: (collection: FlashcardCollectionModel) => void;
	style?: object;
}
