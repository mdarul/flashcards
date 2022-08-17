import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { spacing } from '../../../globalStyles';
import FlashcardCollectionModel from '../../../models/dataModels/flashcardCollectionModel';
import FlashcardModel from '../../../models/dataModels/flashcardModel';
import NavigationProps from '../../../models/props/navigationProps';
import { removeFlashcardFromCollection } from '../../../services/redux/slices/flashcardCollectionsSlice';
import { RootState } from '../../../services/redux/store';
import { translate } from '../../../services/translationService';
import ConfirmationModal from '../../shared/ConfirmationModal/ConfirmationModal';
import ScreenWrapper from '../../shared/ScreenWrapper/ScreenWrapper';
import FlashcardInfo from './FlashcardInfo/FlashcardInfo';

const FlaschardListScreen = ({ navigation }: NavigationProps) => {
	const [selectedFlashcardCollection, setSelectedFlashcardCollection] = useState<FlashcardCollectionModel | null>(null);
	const [selectedFlashcard, setSelectedFlashcard] = useState<FlashcardModel | null>(null);
	const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

	const selectedFlashcardCollectionId = useSelector(
		(state: RootState) => state.flashcardCollectionsReducer.selectedFlashcardCollectionId,
	);
	const flashcardCollections = useSelector((state: RootState) => state.flashcardCollectionsReducer.flashcardCollections);
	const language = useSelector((state: RootState) => state.userSettingsReducers.language);
	const dispatch = useDispatch();

	useEffect(() => {
		setSelectedFlashcardCollection(flashcardCollections.find(o => o.id === selectedFlashcardCollectionId) ?? null);
	}, [flashcardCollections, selectedFlashcardCollectionId]);

	const openDeleteFlashcardModal = (flashcard: FlashcardModel) => {
		setSelectedFlashcard(flashcard);
		setIsDeleteModalVisible(true);
	};

	const closeDeleteFlashcardModal = () => {
		setSelectedFlashcard(null);
		setIsDeleteModalVisible(false);
	};

	const deleteFlashcard = () => {
		if (selectedFlashcard && selectedFlashcardCollection) {
			dispatch(
				removeFlashcardFromCollection({ flashcard: selectedFlashcard, flashcardCollection: selectedFlashcardCollection }),
			);
			setIsDeleteModalVisible(false);
			setSelectedFlashcard(null);
		}
	};

	const renderFlashcard = (flashcard: FlashcardModel) => {
		if (!selectedFlashcardCollection) {
			return <></>;
		}

		return (
			<FlashcardInfo
				flashcard={flashcard}
				onDeletePressed={() => openDeleteFlashcardModal(flashcard)}
				onEditPressed={() => null}
				style={{ width: Dimensions.get('window').width - 5 * spacing, alignSelf: 'center' }}
			/>
		);
	};

	return (
		<ScreenWrapper showBackArrow navigation={navigation}>
			<FlatList
				data={selectedFlashcardCollection?.flashcards ?? []}
				renderItem={o => renderFlashcard(o.item)}
				keyExtractor={(item, i) => item.text + i}
			/>

			<ConfirmationModal
				text={translate('remove_flashcard_question', language)}
				isVisible={isDeleteModalVisible}
				setIsVisible={setIsDeleteModalVisible}
				onConfirm={deleteFlashcard}
				onCancel={closeDeleteFlashcardModal}
			/>
		</ScreenWrapper>
	);
};

export default FlaschardListScreen;
