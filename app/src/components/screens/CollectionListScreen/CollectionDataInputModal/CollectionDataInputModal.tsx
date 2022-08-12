import { Modal, Text, TextInput, View } from 'react-native';
import { useSelector } from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import React, { useEffect, useState } from 'react';
import { spacing } from '../../../../globalStyles';
import { RootState } from '../../../../services/redux/store';
import { shortLanguageToFullName, translate } from '../../../../services/translationService';
import Button from '../../../shared/Button/Button';
import { ButtonType } from '../../../shared/Button/Button.data';
import styles from './CollectionDataInputModal.style';
import DropdownItem from '../../../../models/dataModels/dropdownItem';
import { CollectionDataInputModalProps } from './CollectionDataInputModal.data';
import Language from '../../../../models/enums/language';

const CollectionDataInputModal = ({
	isVisible,
	setIsVisible,
	collectionData,
	setCollectionData,
	onSave,
	onClose,
}: CollectionDataInputModalProps) => {
	const [languageItems, setLanguageItems] = useState<DropdownItem[]>([]);
	const [isFirstDropdownOpened, setIsFirstDropdownOpened] = useState(false);
	const [isSecondDropdownOpened, setIsSecondDropdownOpened] = useState(false);

	const language = useSelector((state: RootState) => state.userSettingsReducers.language);

	useEffect(() => {
		setLanguageItems(Object.values(Language).map(o => ({ label: shortLanguageToFullName(o), value: o })));
	}, [setLanguageItems]);

	const updateFirstLanguage = (fn: React.Dispatch<React.SetStateAction<Language>>) => {
		fn(lang => {
			setCollectionData(prev => ({ ...prev, firstLanguage: language }));
			return lang;
		});
	};

	const updateSecondLanguage = (fn: React.Dispatch<React.SetStateAction<Language>>) => {
		fn(lang => {
			setCollectionData(prev => ({ ...prev, secondLanguage: lang }));
			return lang;
		});
	};

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

					<Text style={styles.textLanguageInfo}>{translate('pickFirstLanguage', language)}:</Text>
					<DropDownPicker
						open={isFirstDropdownOpened}
						value={collectionData.firstLanguage}
						items={languageItems}
						setOpen={setIsFirstDropdownOpened}
						setValue={updateFirstLanguage}
						setItems={setLanguageItems}
						zIndex={1001}
					/>

					<Text style={styles.textLanguageInfo}>{translate('pickSecondLanguage', language)}:</Text>
					<DropDownPicker
						open={isSecondDropdownOpened}
						value={collectionData.secondLanguage}
						items={languageItems}
						setOpen={setIsSecondDropdownOpened}
						setValue={updateSecondLanguage}
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
