import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { RootState } from '@services/redux';
import { translate } from '@services/translationService';
import { spacing } from '@globalStyles';
import { NavigationProps } from '@models/props';
import { FlashcardCollectionModel } from '@models/dataModels';
import { Navigation } from '@models/enums';
import { BarButton, ScreenWrapper } from '@components/shared';
import styles from './FlashcardCollectionScreen.style';

// TODO probably better way to update selected collection: update of selected collection updates list of collections
const FlashcardCollectionScreen = ({ navigation }: NavigationProps) => {
	const [selectedFlashcardCollection, setSelectedFlashcardCollection] = useState<FlashcardCollectionModel | null>(null);
	const language = useSelector((state: RootState) => state.userSettingsReducers.language);
	const selectedFlashcardCollectionId = useSelector(
		(state: RootState) => state.flashcardCollectionsReducer.selectedFlashcardCollectionId,
	);
	const flashcardCollections = useSelector((state: RootState) => state.flashcardCollectionsReducer.flashcardCollections);

	useEffect(() => {
		setSelectedFlashcardCollection(flashcardCollections.find(o => o.id === selectedFlashcardCollectionId) ?? null);
	}, [flashcardCollections, selectedFlashcardCollectionId]);

	return (
		<ScreenWrapper showBackArrow navigation={navigation}>
			<BarButton
				text={translate('add_flashcard', language)}
				onPressed={() =>
					navigation.navigate(Navigation.AddFlashcardScreen, { flashcardCollection: selectedFlashcardCollection })
				}
				icon={<Ionicons name="add-circle-outline" size={30} color="black" style={{ marginRight: spacing / 2 }} />}
				style={[styles.buttonMarginY, styles.buttonHeight]}
			/>

			<BarButton
				text={`${translate('show_flashcard_list', language)} (${selectedFlashcardCollection?.flashcards.length ?? 0})`}
				onPressed={() => navigation.navigate(Navigation.FlaschardListScreen)}
				style={[styles.buttonMarginY, styles.buttonMarginTop, styles.buttonHeight]}
			/>

			<BarButton
				text={translate('start_quiz', language)}
				onPressed={() => navigation.navigate(Navigation.QuizScreen)}
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
