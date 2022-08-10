import TextWithLanguagePair from "./textWithLanguagePair";

export default interface FlashcardModel {
    text: TextWithLanguagePair;
    translatedText: TextWithLanguagePair;
}