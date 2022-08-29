import { useEffect, useState } from 'react';
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import FlashcardCollectionModel from '../../../models/dataModels/flashcardCollectionModel';
import NavigationProps from '../../../models/props/navigationProps';
import { RootState } from '../../../services/redux/store';
import ScreenWrapper from '../../shared/ScreenWrapper/ScreenWrapper';
import styles from './QuizScreen.style';
import { languageToFlagImage } from '../../../services/flagService';
import FlashcardModel from '../../../models/dataModels/flashcardModel';
import { getShuffledArray } from '../../../services/utils';
import { translate } from '../../../services/translationService';

const QuizScreen = ({ navigation }: NavigationProps) => {
	const [flashcardCollection, setFlashcardCollection] = useState<FlashcardCollectionModel | null>(null);
	const [shuffledFlashcards, setShuffledFlashcards] = useState<FlashcardModel[]>([]);
	const [currentItemIndex, setCurrentItemIndex] = useState(0);
	const [answers, setAnswers] = useState<FlashcardModel[]>([]);

	const language = useSelector((state: RootState) => state.userSettingsReducers.language);
	const flashcardCollections = useSelector((state: RootState) => state.flashcardCollectionsReducer.flashcardCollections);
	const selectedFlashcardCollectionId = useSelector(
		(state: RootState) => state.flashcardCollectionsReducer.selectedFlashcardCollectionId,
	);

	useEffect(() => {
		setFlashcardCollection(flashcardCollections.find(o => o.id === selectedFlashcardCollectionId) ?? null);
	}, [flashcardCollections, selectedFlashcardCollectionId]);

	useEffect(() => {
		if (flashcardCollection) {
			setShuffledFlashcards(getShuffledArray(flashcardCollection.flashcards));
			setCurrentItemIndex(0);
		}
	}, [flashcardCollection]);

	useEffect(() => {
		if (shuffledFlashcards.length > currentItemIndex) {
			const flashcards = [shuffledFlashcards[currentItemIndex]];

			while (flashcards.length < 4 && flashcards.length < shuffledFlashcards.length) {
				const randomIndex = Math.floor(Math.random() * shuffledFlashcards.length);
				if (!flashcards.includes(shuffledFlashcards[randomIndex])) {
					flashcards.push(shuffledFlashcards[randomIndex]);
				}
			}

			setAnswers(getShuffledArray(flashcards));
		}
	}, [currentItemIndex, shuffledFlashcards]);

	const handleAnswerClicked = (translation: string) => {
		if (translation === shuffledFlashcards[currentItemIndex].translatedText) {
			setCurrentItemIndex(prev => prev + 1);
		}
	};

	if (shuffledFlashcards.length > 0 && currentItemIndex >= shuffledFlashcards.length) {
		return (
			<ScreenWrapper showBackArrow navigation={navigation}>
				<Text style={[styles.translationText, styles.congratulationsText]}>
					{translate('quiz_done_congratulations', language)}
				</Text>
			</ScreenWrapper>
		);
	}

	if (!flashcardCollection || currentItemIndex >= shuffledFlashcards.length) {
		return <ScreenWrapper showBackArrow navigation={navigation} />;
	}

	return (
		<ScreenWrapper showBackArrow navigation={navigation} style={styles.wrapperContainer}>
			<View style={styles.questionContainer}>
				<Text style={styles.translationText}>{shuffledFlashcards[currentItemIndex].text}</Text>
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
			<View>
				{answers.map(flashcard => (
					<TouchableOpacity
						key={flashcard.id}
						style={styles.answerContainer}
						onPress={() => handleAnswerClicked(flashcard.translatedText)}
					>
						<Text style={styles.translationText}>{flashcard.translatedText}</Text>
					</TouchableOpacity>
				))}
			</View>
		</ScreenWrapper>
	);
};

export default QuizScreen;
