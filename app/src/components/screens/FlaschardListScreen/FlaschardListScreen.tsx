import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import FlashcardCollectionModel from '../../../models/dataModels/flashcardCollectionModel';
import FlashcardModel from '../../../models/dataModels/flashcardModel';
import { RootState } from '../../../services/redux/store';
import ScreenWrapper from '../../shared/ScreenWrapper/ScreenWrapper';
import styles from './FlaschardListScreen.style';
import FlashcardInfo from './FlashcardInfo/FlashcardInfo';

const FlaschardListScreen = () => {
	const [selectedFlashcardCollection, setSelectedFlashcardCollection] = useState<FlashcardCollectionModel | null>(null);
	const selectedFlashcardCollectionId = useSelector(
		(state: RootState) => state.flashcardCollectionsReducer.selectedFlashcardCollectionId,
	);
	const flashcardCollections = useSelector((state: RootState) => state.flashcardCollectionsReducer.flashcardCollections);

	useEffect(() => {
		setSelectedFlashcardCollection(flashcardCollections.find(o => o.id === selectedFlashcardCollectionId) ?? null);
	}, [flashcardCollections, selectedFlashcardCollectionId]);

	const renderFlashcard = (flashcard: FlashcardModel) => {
		return <FlashcardInfo flashcard={flashcard} onDeletePressed={() => null} onEditPressed={() => null} />;
	};

	return (
		<ScreenWrapper>
			<FlatList
				data={selectedFlashcardCollection?.flashcards ?? []}
				renderItem={o => renderFlashcard(o.item)}
				keyExtractor={(item, i) => item.text + i}
				style={styles.listContainer}
			/>
		</ScreenWrapper>
	);
};

export default FlaschardListScreen;
