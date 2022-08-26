import { Modal, TextInput, View } from 'react-native';
import { useSelector } from 'react-redux';
import { spacing } from '../../../../globalStyles';
import { RootState } from '../../../../services/redux/store';
import { translate } from '../../../../services/translationService';
import Button from '../../../shared/Button/Button';
import { ButtonType } from '../../../shared/Button/Button.data';
import { FlashcardDataEditModalProps } from './FlashcardDataEditModal.data';
import styles from './FlashcardDataEditModal.style';

const FlashcardDataEditModal = ({
	isVisible,
	setIsVisible,
	flashcard,
	setFlashcard,
	onSave,
	onClose,
}: FlashcardDataEditModalProps) => {
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
					<TextInput
						style={[styles.modalTextInput, { marginBottom: spacing * 3 }]}
						value={flashcard?.text ?? ''}
						onChangeText={text => setFlashcard(prev => (prev ? { ...prev, text } : null))}
						placeholder={translate('enter_text', language) + '...'}
					/>

					<TextInput
						style={styles.modalTextInput}
						value={flashcard?.translatedText ?? ''}
						onChangeText={text => setFlashcard(prev => (prev ? { ...prev, translatedText: text } : null))}
						placeholder={translate('enter_translation', language) + '...'}
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

export default FlashcardDataEditModal;
