/* eslint-disable no-unused-vars */
import FlashcardCollectionModel from '../../../../models/dataModels/flashcardCollectionModel';

export default interface CollectionInfoProps {
	flashcardCollection: FlashcardCollectionModel;
	onDeletePressed: (collection: FlashcardCollectionModel) => void;
	onEditPressed: (collection: FlashcardCollectionModel) => void;
	style?: object;
}
