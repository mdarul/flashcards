import { FlashcardCollectionModel, FlashcardModel } from '@models/dataModels';
import { NavigationProps } from '@models/props';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { spacing } from '@globalStyles';
import { editFlashcardInCollection, removeFlashcardFromCollection, RootState } from '@services/redux';
import { translate } from '@services/translationService';
import { ConfirmationModal, ScreenWrapper } from '@components/shared';
import styles from './FlaschardListScreen.style';
import FlashcardDataEditModal from './FlashcardDataEditModal/FlashcardDataEditModal';
import FlashcardInfo from './FlashcardInfo/FlashcardInfo';

const FlaschardListScreen = ({ navigation }: NavigationProps) => {
	const [selectedFlashcardCollection, setSelectedFlashcardCollection] = useState<FlashcardCollectionModel | null>(null);
	const [selectedFlashcard, setSelectedFlashcard] = useState<FlashcardModel | null>(null);
	const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
	const [isEditModalVisible, setIsEditModalVisible] = useState(false);

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

	const openEditFlashcardModal = (flashcard: FlashcardModel) => {
		setSelectedFlashcard(flashcard);
		setIsEditModalVisible(true);
	};

	const closeEditFlashcardModal = () => {
		setSelectedFlashcard(null);
		setIsEditModalVisible(false);
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

	const editFlashcard = () => {
		if (selectedFlashcard && selectedFlashcardCollection) {
			dispatch(
				editFlashcardInCollection({ flashcard: selectedFlashcard, flashcardCollection: selectedFlashcardCollection }),
			);
			setIsEditModalVisible(false);
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
				onEditPressed={() => openEditFlashcardModal(flashcard)}
				style={{ width: Dimensions.get('window').width - 5 * spacing, alignSelf: 'center' }}
			/>
		);
	};

	return (
		<ScreenWrapper showBackArrow navigation={navigation}>
			<FlatList
				data={selectedFlashcardCollection?.flashcards ?? []}
				style={styles.listContainer}
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

			<FlashcardDataEditModal
				isVisible={isEditModalVisible}
				setIsVisible={setIsEditModalVisible}
				flashcard={selectedFlashcard}
				setFlashcard={setSelectedFlashcard}
				onSave={editFlashcard}
				onClose={closeEditFlashcardModal}
			/>
		</ScreenWrapper>
	);
};

export default FlaschardListScreen;
