import { useEffect, useState } from 'react';
import { Image, ImageSourcePropType, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import FlashcardCollectionModel from '../../../models/dataModels/flashcardCollectionModel';
import NavigationProps from '../../../models/props/navigationProps';
import { RootState } from '../../../services/redux/store';
import ScreenWrapper from '../../shared/ScreenWrapper/ScreenWrapper';
import styles from './QuizScreen.style';
import { languageToFlagImage } from '../../../services/flagService';

const QuizScreen = ({ navigation }: NavigationProps) => {
	const [flashcardCollection, setFlashcardCollection] = useState<FlashcardCollectionModel | null>(null);
	const flashcardCollections = useSelector((state: RootState) => state.flashcardCollectionsReducer.flashcardCollections);
	const selectedFlashcardCollectionId = useSelector(
		(state: RootState) => state.flashcardCollectionsReducer.selectedFlashcardCollectionId,
	);

	useEffect(() => {
		setFlashcardCollection(flashcardCollections.find(o => o.id === selectedFlashcardCollectionId) ?? null);
	}, [flashcardCollections, selectedFlashcardCollectionId]);

	useEffect(() => {
		// shuffle
	}, [flashcardCollection]);

	if (!flashcardCollection) {
		return <ScreenWrapper showBackArrow navigation={navigation} />;
	}

	return (
		<ScreenWrapper showBackArrow navigation={navigation} style={styles.wrapperContainer}>
			<View style={styles.questionContainer}>
				<View style={styles.questionIconsContainer}>
					<Image
						source={languageToFlagImage(flashcardCollection.firstLanguage) as ImageSourcePropType}
						style={styles.flagImage}
					/>
					<Ionicons name="arrow-forward-outline" size={36} color="black" style={styles.arrowIcon} />
					<Image
						source={languageToFlagImage(flashcardCollection.secondLanguage) as ImageSourcePropType}
						style={styles.flagImage}
					/>
				</View>
			</View>
		</ScreenWrapper>
	);
};

export default QuizScreen;
