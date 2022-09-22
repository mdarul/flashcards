import React from 'react';
import { Modal, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { spacing } from '@globalStyles';
import { RootState } from '@services/redux';
import { translate } from '@services/translationService';
import { ButtonType } from '@models/enums';
import Button from '../Button/Button';
import ConfirmationModalProps from './ConfirmationModal.data';
import styles from './ConfirmationModal.style';

const ConfirmationModal = ({ text, isVisible, setIsVisible, onConfirm, onCancel }: ConfirmationModalProps) => {
	const language = useSelector((state: RootState) => state.userSettingsReducers.language);

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
					<Text style={styles.modalInfoText}>{text}</Text>
					<View style={styles.modalButtonsRow}>
						<Button text={translate('confirm', language)} type={ButtonType.LIGHT_GREEN} onPress={onConfirm} />
						<Button
							text={translate('close', language)}
							type={ButtonType.WHITE}
							onPress={onCancel}
							style={{ marginLeft: spacing }}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default ConfirmationModal;
