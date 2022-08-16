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

const FlashcardCollectionScreen = ({ navigation, route }: FlashcardCollectionScreenProps) => {
	const [flashcardCollection, setFlashcardCollections] = useState<FlashcardCollectionModel | null>(null);
	const language = useSelector((state: RootState) => state.userSettingsReducers.language);

	useEffect(() => {
		setFlashcardCollections(route.params.flashcardCollection);
	}, [route]);

	return (
		<ScreenWrapper>
			<LanguagePickerBar />

			<BarButton
				text={translate('add_flashcard', language)}
				onPressed={() => null}
				icon={<Ionicons name="add-circle-outline" size={30} color="black" style={{ marginRight: spacing / 2 }} />}
				style={styles.addFlashcardContainer}
			/>
		</ScreenWrapper>
	);
};

export default FlashcardCollectionScreen;
