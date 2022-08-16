import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { RootState } from '../../../services/redux/store';
import { translate } from '../../../services/translationService';
import BarButton from '../../shared/BarButton/BarButton';
import LanguagePickerBar from '../../shared/LanguagePickerBar/LanguagePickerBar';
import ScreenWrapper from '../../shared/ScreenWrapper/ScreenWrapper';
import styles from './FlashcardCollectionScreen.style';
import { spacing } from '../../../globalStyles';
import Navigation from '../../../models/enums/navigation';
import NavigationProps from '../../../models/props/navigationProps';

const FlashcardCollectionScreen = ({ navigation }: NavigationProps) => {
	const language = useSelector((state: RootState) => state.userSettingsReducers.language);
	const selectedFlashcardCollection = useSelector(
		(state: RootState) => state.flashcardCollectionsReducer.selectedFlashcardCollection,
	);

	const onAddFlashcardPressed = () => {
		if (selectedFlashcardCollection) {
			navigation.navigate(Navigation.AddFlashcardScreen, { flashcardCollection: selectedFlashcardCollection });
		}
	};

	useEffect(() => {
		console.log(selectedFlashcardCollection?.flashcards.length);
	}, [selectedFlashcardCollection]);

	return (
		<ScreenWrapper>
			<LanguagePickerBar />

			<BarButton
				text={translate('add_flashcard', language)}
				onPressed={onAddFlashcardPressed}
				icon={<Ionicons name="add-circle-outline" size={30} color="black" style={{ marginRight: spacing / 2 }} />}
				style={[styles.buttonMarginY, styles.buttonHeight]}
			/>

			<BarButton
				text={translate('show_flashcard_list', language)}
				onPressed={() => null}
				style={[styles.buttonMarginY, styles.buttonMarginTop, styles.buttonHeight]}
			/>

			<BarButton
				text={translate('start_quiz', language)}
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
