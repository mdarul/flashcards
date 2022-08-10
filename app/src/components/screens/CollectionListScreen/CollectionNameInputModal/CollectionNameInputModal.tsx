import { Modal, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
import { spacing } from "../../../../globalStyles";
import { RootState } from "../../../../services/redux/store";
import { translate } from "../../../../services/translationService";
import Button from "../../../shared/Button/Button";
import { ButtonType } from "../../../shared/Button/Button.data";
import CollectionNameInputModalProps from "./CollectionNameInputModal.data";
import styles from "./CollectionNameInputModal.style";

const CollectionNameInputModal = ({isVisible, setIsVisible, collectionName, setCollectionName, onSave, onClose}: CollectionNameInputModalProps) => {
    const language = useSelector((state: RootState) => state.userSettingsReducers.language);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
                setIsVisible(!isVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TextInput 
                        style={styles.modalTextInput} 
                        value={collectionName} 
                        onChangeText={setCollectionName}
                        placeholder={translate('collection_name', language)} 
                    />
                    <View style={styles.modalButtonsRow}>
                        <Button 
                            text={translate('save', language)} 
                            type={ButtonType.BLUE} 
                            onPress={onSave} />
                        <Button 
                            text={translate('close', language)} 
                            type={ButtonType.WHITE} 
                            onPress={onClose} 
                            style={{ marginLeft: spacing }} />
                    </View>
                    
                </View>
            </View> 
        </Modal>
    )
}

export default CollectionNameInputModal;