import translations from "../../translations.json";
import Language from "../models/enums/language";

export const translate = (translationKey: string, language: Language): string => {
    return translations
        .find(translation => translation.key === translationKey)
        ?.values.find(o => o.language === language)?.value
        ?? ''
} 