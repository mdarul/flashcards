import { Modal, Text, TextInput, View } from 'react-native';
import { useSelector } from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import React, { useEffect, useState } from 'react';
import { spacing } from '@globalStyles';
import { ButtonType, Language } from '@models/enums';
import { DropdownItem } from '@models/dataModels';
import { RootState } from '@services/redux';
import { getLanguageFullName, translate } from '@services/translationService';
import { Button } from '@components/shared';
import { CollectionDataInputModalProps } from './FlashcardCollectionDataInputModal.data';
import styles from './FlashcardCollectionDataInputModal.style';

const CollectionDataInputModal = ({
	isVisible,
	setIsVisible,
	collectionData,
	setCollectionData,
	onSave,
	onClose,
}: CollectionDataInputModalProps) => {
	const [firstDropdownValue, setFirstDropdownValue] = useState<Language | undefined>(collectionData.firstLanguage);
	const [secondDropdownValue, setSecondDropdownValue] = useState<Language | undefined>(collectionData.secondLanguage);
	const [languageItems, setLanguageItems] = useState<DropdownItem[]>([]);
	const [isFirstDropdownOpened, setIsFirstDropdownOpened] = useState(false);
	const [isSecondDropdownOpened, setIsSecondDropdownOpened] = useState(false);

	const language = useSelector((state: RootState) => state.userSettingsReducers.language);

	useEffect(() => {
		setLanguageItems(Object.values(Language).map(o => ({ label: getLanguageFullName(o), value: o })));
	}, [setLanguageItems]);

	useEffect(() => {
		setFirstDropdownValue(collectionData.firstLanguage);
		setSecondDropdownValue(collectionData.secondLanguage);
	}, [collectionData, setFirstDropdownValue, setSecondDropdownValue]);

	useEffect(() => {
		if (firstDropdownValue) {
			setCollectionData(prev => ({ ...prev, firstLanguage: firstDropdownValue }));
		}
	}, [firstDropdownValue, setCollectionData]);

	useEffect(() => {
		if (secondDropdownValue) {
			setCollectionData(prev => ({ ...prev, secondLanguage: secondDropdownValue }));
		}
	}, [secondDropdownValue, setCollectionData]);

	return (
		<Modal
			animationType="slide"
			transparent
			visible={isVisible}
			onRequestClose={() => {
				setIsVisible(!isVisible);
			}}
		>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<TextInput
						style={styles.modalTextInput}
						value={collectionData.name}
						onChangeText={text => setCollectionData(prev => ({ ...prev, name: text }))}
						placeholder={translate('collection_name', language) + '...'}
					/>

					<Text style={styles.textLanguageInfo}>{translate('pick_first_language', language)}:</Text>
					<DropDownPicker
						open={isFirstDropdownOpened}
						value={firstDropdownValue ?? null}
						items={languageItems}
						setOpen={setIsFirstDropdownOpened}
						setValue={setFirstDropdownValue}
						setItems={setLanguageItems}
						zIndex={1001}
					/>

					<Text style={styles.textLanguageInfo}>{translate('pick_second_language', language)}:</Text>
					<DropDownPicker
						open={isSecondDropdownOpened}
						value={secondDropdownValue ?? null}
						items={languageItems}
						setOpen={setIsSecondDropdownOpened}
						setValue={setSecondDropdownValue}
						setItems={setLanguageItems}
						zIndex={1000}
					/>

					<View style={styles.buttonsRow}>
						<Button text={translate('save', language)} type={ButtonType.LIGHT_GREEN} onPress={onSave} />
						<Button
							text={translate('close', language)}
							type={ButtonType.WHITE}
							onPress={onClose}
							style={{ marginLeft: spacing }}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default CollectionDataInputModal;
