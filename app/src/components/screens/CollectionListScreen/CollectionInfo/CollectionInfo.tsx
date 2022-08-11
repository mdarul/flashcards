import { Text, TouchableOpacity, View } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import styles from './CollectionInfo.style';
import CollectionInfoProps from './CollectionInfo.data';

const CollectionInfo = ({ flashcardCollection, onDeletePressed, onEditPressed, style }: CollectionInfoProps) => {
	return (
		<View style={[styles.container, style]}>
			<Text style={styles.collectionNameText}>{flashcardCollection.name}</Text>
			<View style={styles.icons}>
				<TouchableOpacity style={styles.iconWrapper} onPress={() => onEditPressed(flashcardCollection)}>
					<Feather name="edit-2" size={24} color="black" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.iconWrapper} onPress={() => onDeletePressed(flashcardCollection)}>
					<Feather name="trash-2" size={24} color="black" />
				</TouchableOpacity>
				<View style={styles.lastIconWrapper}>
					<MaterialIcons name="drag-indicator" size={24} color="black" />
				</View>
			</View>
		</View>
	);
};

export default CollectionInfo;
