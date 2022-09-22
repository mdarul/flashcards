import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { spacing } from '@globalStyles';
import { addFlashcardToCollection, RootState } from '@services/redux';
import { translate } from '@services/translationService';
import { BarButton, ScreenWrapper } from '@components/shared';
import AddFlashcardScreenProps from './AddFlashcardScreen.data';
import styles from './AddFlashcardScreen.style';
import TranslationInput from './TranslationInput/TranslationInput';

const AddFlashcardScreen = ({ navigation, route }: AddFlashcardScreenProps) => {
	const [text, setText] = useState('');
	const [translatedText, setTranslatedText] = useState('');
	const language = useSelector((state: RootState) => state.userSettingsReducers.language);
	const dispatch = useDispatch();

	const addFlashcard = () => {
		if (route.params.flashcardCollection) {
			dispatch(
				addFlashcardToCollection({
					flashcardDto: { text, translatedText },
					flashcardCollection: route.params.flashcardCollection,
				}),
			);
			navigation.goBack();
		}
	};

	if (!route.params.flashcardCollection) {
		return <ScreenWrapper />;
	}

	return (
		<ScreenWrapper style={styles.screenWrapper} showBackArrow navigation={navigation}>
			<TranslationInput
				text={text}
				setText={setText}
				language={route.params.flashcardCollection.firstLanguage}
				placeholder={translate('enter_text', language)}
			/>

			<TranslationInput
				text={translatedText}
				setText={setTranslatedText}
				language={route.params.flashcardCollection.secondLanguage}
				placeholder={translate('enter_translation', language)}
				style={{ marginTop: spacing * 4 }}
			/>

			<BarButton onPressed={addFlashcard} text={translate('add_flashcard', language)} style={{ marginTop: spacing * 8 }} />
		</ScreenWrapper>
	);
};

export default AddFlashcardScreen;
