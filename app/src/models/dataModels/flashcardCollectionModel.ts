import FlashcardModel from "./flashcardModel";

export default interface FlashcardCollectionModel {
    id: number;
    name: string;
    flashcards: FlashcardModel[];
}