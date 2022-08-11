import React, { useCallback, useState } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import DraggableFlatList, { RenderItemParams, ScaleDecorator } from 'react-native-draggable-flatlist';
import { translate } from '../../../services/translationService';
import ScreenWrapper from '../../shared/ScreenWrapper/ScreenWrapper';
import BarButton from '../../shared/BarButton/BarButton';
import styles from './CollectionListScreen.style';
import { RootState } from '../../../services/redux/store';
import { spacing } from '../../../globalStyles';
import CollectionNameInputModal from './CollectionNameInputModal/CollectionNameInputModal';
import {
	createFlashcardCollection,
	editFlascardCollection,
	removeFlashcardCollection,
	setFlashcardCollections,
} from '../../../services/redux/slices/flashcardCollectionsSlice';
import CollectionInfo from './CollectionInfo/CollectionInfo';
import ConfirmationModal from '../../shared/ConfirmationModal/ConfirmationModal';
import FlashcardCollectionModel from '../../../models/dataModels/flashcardCollectionModel';

const CollectionListScreen = () => {
	const [collectionName, setCollectionName] = useState('');
	const [isCreateCollectionModalVisible, setIsCreateCollectionModalVisible] = useState(false);
	const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
	const [isEditCollectionModalVisible, setIsEditCollectionModalVisible] = useState(false);
	const [selectedCollection, setSelectedCollection] = useState<FlashcardCollectionModel | null>(null);

	const flashcardCollections = useSelector((state: RootState) => state.flashcardCollectionsReducer.flashcardCollections);
	const language = useSelector((state: RootState) => state.userSettingsReducers.language);
	const dispatch = useDispatch();

	const onAddCollectionPressed = useCallback(() => {
		setIsCreateCollectionModalVisible(true);
	}, []);

	const createCollection = () => {
		dispatch(createFlashcardCollection(collectionName));
		setIsCreateCollectionModalVisible(false);
	};

	const closeCreateCollectionModal = () => {
		setCollectionName('');
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
		setCollectionName(collection.name);
		setIsEditCollectionModalVisible(true);
	};

	const closeDeleteCollectionModal = () => {
		setSelectedCollection(null);
		setIsDeleteModalVisible(false);
	};

	const editCollection = () => {
		if (selectedCollection) {
			dispatch(editFlascardCollection({ ...selectedCollection, name: collectionName }));
			setIsCreateCollectionModalVisible(false);
		}
		setCollectionName('');
		setIsEditCollectionModalVisible(false);
	};

	const closeEditCollectionModal = () => {
		setSelectedCollection(null);
		setCollectionName('');
		setIsEditCollectionModalVisible(false);
	};

	const renderCollectionItem = ({ item, drag, isActive }: RenderItemParams<FlashcardCollectionModel>) => {
		return (
			<ScaleDecorator>
				<TouchableOpacity onLongPress={drag} disabled={isActive}>
					<CollectionInfo
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
		<ScreenWrapper style={styles.screenWrapperContainer}>
			<BarButton
				text={translate('add_collection', language)}
				onPressed={onAddCollectionPressed}
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

			<CollectionNameInputModal
				isVisible={isCreateCollectionModalVisible}
				setIsVisible={setIsCreateCollectionModalVisible}
				collectionName={collectionName}
				setCollectionName={setCollectionName}
				onSave={createCollection}
				onClose={closeCreateCollectionModal}
			/>

			<CollectionNameInputModal
				isVisible={isEditCollectionModalVisible}
				setIsVisible={setIsEditCollectionModalVisible}
				collectionName={collectionName}
				setCollectionName={setCollectionName}
				onSave={editCollection}
				onClose={closeEditCollectionModal}
			/>

			<ConfirmationModal
				text={translate('removeCollectionQuestion', language)}
				isVisible={isDeleteModalVisible}
				setIsVisible={setIsDeleteModalVisible}
				onConfirm={deleteCollection}
				onCancel={closeDeleteCollectionModal}
			/>
		</ScreenWrapper>
	);
};

export default CollectionListScreen;
