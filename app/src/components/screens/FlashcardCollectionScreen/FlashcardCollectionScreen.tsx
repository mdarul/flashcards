/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { RootState } from '../../../services/redux/store';
import { translate } from '../../../services/translationService';
import BarButton from '../../shared/BarButton/BarButton';
import LanguagePickerBar from '../../shared/LanguagePickerBar/LanguagePickerBar';
import ScreenWrapper from '../../shared/ScreenWrapper/ScreenWrapper';
import styles from './FlashcardCollectionScreen.style';
import { spacing } from '../../../globalStyles';
import FlashcardCollectionScreenProps from './FlashcardCollectionScreen.data';
import FlashcardCollectionModel from '../../../models/dataModels/flashcardCollectionModel';
import Navigation from '../../../models/enums/navigation';

const FlashcardCollectionScreen = ({ navigation, route }: FlashcardCollectionScreenProps) => {
	// const [flashcardCollection, setFlashcardCollections] = useState<FlashcardCollectionModel | null>(null);
	const language = useSelector((state: RootState) => state.userSettingsReducers.language);

	useEffect(() => {
		console.log(route.params.flashcardCollection.flashcards.length);
		// setFlashcardCollections(route.params.flashcardCollection);
	}, [route]);

	return (
		<ScreenWrapper>
			<LanguagePickerBar />

			<BarButton
				text={translate('add_flashcard', language)}
				onPressed={() =>
					navigation.navigate(Navigation.AddFlashcardScreen, { flashcardCollection: route.params.flashcardCollection })
				}
				icon={<Ionicons name="add-circle-outline" size={30} color="black" style={{ marginRight: spacing / 2 }} />}
				style={[styles.buttonMarginY, styles.buttonHeight]}
			/>

			<BarButton
				text={translate('show_flashcard_list', language)}
				onPressed={() => null}
				style={[styles.buttonMarginY, styles.buttonMarginTop, styles.buttonHeight]}
			/>

			<BarButton
				text={translate('start_classic_quiz', language)}
				onPressed={() => null}
				style={[styles.buttonMarginY, styles.buttonMarginTop, styles.buttonHeight]}
			/>

			<BarButton
				text={translate('start_quiz_without_visible_answers', language)}
				onPressed={() => null}
				style={[styles.buttonMarginY, styles.buttonMarginTop, styles.buttonHeight]}
			/>
		</ScreenWrapper>
	);
};

export default FlashcardCollectionScreen;
