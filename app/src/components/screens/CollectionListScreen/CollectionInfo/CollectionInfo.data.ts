import FlashcardCollectionModel from "../../../../models/dataModels/flashcardCollectionModel";

export default interface CollectionInfoProps {
    flashcardCollection: FlashcardCollectionModel;
    onDeletePressed: (collection: FlashcardCollectionModel) => void;
    onEditPressed: (collection: FlashcardCollectionModel) => void;
}