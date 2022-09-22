import React, { useState } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import DraggableFlatList, { RenderItemParams, ScaleDecorator } from 'react-native-draggable-flatlist';
import { spacing } from '@globalStyles';
import { NavigationProps } from '@models/props';
import { FlashcardCollectionCreateEditData, FlashcardCollectionModel } from '@models/dataModels';
import { Language, Navigation } from '@models/enums';
import {
	createFlashcardCollection,
	editFlashcardCollection,
	removeFlashcardCollection,
	RootState,
	setFlashcardCollections,
	setSelectedFlashcardCollectionId,
} from '@services/redux';
import { translate } from '@services/translationService';
import { BarButton, ConfirmationModal, ScreenWrapper } from '@components/shared';
import { emptyFlashcardCollectionCreateEditData } from './FlashcardCollectionListScreen.data';
import FlashcardCollectionInfo from './FlashcardCollectionInfo/FlashcardCollectionInfo';
import CollectionDataInputModal from './FlashcardCollectionDataInputModal/FlashcardCollectionDataInputModal';
import styles from './FlashcardCollectionListScreen.style';

const FlashcardCollectionListScreen = ({ navigation }: NavigationProps) => {
	const [collectionCreateEditData, setCollectionCreateEditData] = useState<FlashcardCollectionCreateEditData>(
		emptyFlashcardCollectionCreateEditData,
	);
	const [isCreateCollectionModalVisible, setIsCreateCollectionModalVisible] = useState(false);
	const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
	const [isEditCollectionModalVisible, setIsEditCollectionModalVisible] = useState(false);
	const [selectedCollection, setSelectedCollection] = useState<FlashcardCollectionModel | null>(null);

	const flashcardCollections = useSelector((state: RootState) => state.flashcardCollectionsReducer.flashcardCollections);
	const language = useSelector((state: RootState) => state.userSettingsReducers.language);
	const dispatch = useDispatch();

	const clearCollectionEditData = () => {
		setCollectionCreateEditData({ name: '', firstLanguage: Language.ENGLISH, secondLanguage: Language.ENGLISH });
	};

	const createCollection = () => {
		if (collectionCreateEditData) {
			dispatch(createFlashcardCollection(collectionCreateEditData));
			setIsCreateCollectionModalVisible(false);
		}
		clearCollectionEditData();
		setIsCreateCollectionModalVisible(false);
	};

	const closeCreateCollectionModal = () => {
		clearCollectionEditData();
		setIsCreateCollectionModalVisible(false);
	};

	const openDeleteCollectionModal = (collection: FlashcardCollectionModel) => {
		setSelectedCollection(collection);
		setIsDeleteModalVisible(true);
	};

	const deleteCollection = () => {
		if (selectedCollection) {
			dispatch(removeFlashcardCollection(selectedCollection.id));
			setIsDeleteModalVisible(false);
			setSelectedCollection(null);
		}
	};

	const openEditCollectionModal = (collection: FlashcardCollectionModel) => {
		setSelectedCollection(collection);
		setCollectionCreateEditData({
			name: collection.name,
			firstLanguage: collection.firstLanguage,
			secondLanguage: collection.secondLanguage,
		});
		setIsEditCollectionModalVisible(true);
	};

	const closeDeleteCollectionModal = () => {
		setSelectedCollection(null);
		setIsDeleteModalVisible(false);
	};

	const editCollection = () => {
		if (selectedCollection) {
			dispatch(editFlashcardCollection({ ...selectedCollection, ...collectionCreateEditData }));
			setIsCreateCollectionModalVisible(false);
		}
		clearCollectionEditData();
		setIsEditCollectionModalVisible(false);
	};

	const closeEditCollectionModal = () => {
		setSelectedCollection(null);
		clearCollectionEditData();
		setIsEditCollectionModalVisible(false);
	};

	const onCollectionPressed = (flashcardCollection: FlashcardCollectionModel) => {
		dispatch(setSelectedFlashcardCollectionId(flashcardCollection.id));
		navigation.navigate(Navigation.FlashcardCollectionScreen);
	};

	const renderCollectionItem = ({ item, drag, isActive }: RenderItemParams<FlashcardCollectionModel>) => {
		return (
			<ScaleDecorator>
				<TouchableOpacity
					onLongPress={drag}
					disabled={isActive}
					delayLongPress={150}
					onPress={() => onCollectionPressed(item)}
				>
					<FlashcardCollectionInfo
						flashcardCollection={item}
						onDeletePressed={openDeleteCollectionModal}
						onEditPressed={openEditCollectionModal}
						style={{ width: Dimensions.get('window').width - 5 * spacing, alignSelf: 'center' }}
					/>
				</TouchableOpacity>
			</ScaleDecorator>
		);
	};

	return (
		<ScreenWrapper>
			<BarButton
				text={translate('add_collection', language)}
				onPressed={() => setIsCreateCollectionModalVisible(true)}
				icon={<Ionicons name="add-circle-outline" size={30} color="black" style={{ marginRight: spacing / 2 }} />}
				style={styles.addCollectionContainer}
			/>

			<DraggableFlatList
				style={styles.collectionsContainer}
				data={flashcardCollections}
				keyExtractor={item => item.id.toString()}
				onDragEnd={({ data }) => dispatch(setFlashcardCollections(data))}
				renderItem={renderCollectionItem}
			/>

			<CollectionDataInputModal
				isVisible={isCreateCollectionModalVisible}
				setIsVisible={setIsCreateCollectionModalVisible}
				collectionData={collectionCreateEditData}
				setCollectionData={setCollectionCreateEditData}
				onSave={createCollection}
				onClose={closeCreateCollectionModal}
			/>

			<CollectionDataInputModal
				isVisible={isEditCollectionModalVisible}
				setIsVisible={setIsEditCollectionModalVisible}
				collectionData={collectionCreateEditData}
				setCollectionData={setCollectionCreateEditData}
				onSave={editCollection}
				onClose={closeEditCollectionModal}
			/>

			<ConfirmationModal
				text={translate('remove_collection_question', language)}
				isVisible={isDeleteModalVisible}
				setIsVisible={setIsDeleteModalVisible}
				onConfirm={deleteCollection}
				onCancel={closeDeleteCollectionModal}
			/>
		</ScreenWrapper>
	);
};

export default FlashcardCollectionListScreen;
