import { Text, TouchableOpacity, View } from 'react-native'
import styles from './CollectionInfo.style'
import { Feather } from '@expo/vector-icons'; 
import CollectionInfoProps from './CollectionInfo.data';

const CollectionInfo = ({flashcardCollection, onDeletePressed, onEditPressed}: CollectionInfoProps) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.collectionNameText}>{flashcardCollection.name}</Text>
            <View style={styles.icons}>
                <TouchableOpacity style={styles.iconWrapper} onPress={() => onEditPressed(flashcardCollection)}>
                    <Feather name="edit-2" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.lastIconWrapper} onPress={() => onDeletePressed(flashcardCollection)}>
                    <Feather name="trash-2" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default CollectionInfo