import { Text, TouchableOpacity, View, Image, ImageSourcePropType } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import styles from './CollectionInfo.style';
import CollectionInfoProps from './CollectionInfo.data';
import { languageToFlagImage } from '../../../../services/flagService';

const CollectionInfo = ({ flashcardCollection, onDeletePressed, onEditPressed, style }: CollectionInfoProps) => {
	return (
		<View style={[styles.container, style]}>
			<View style={styles.flagsContainer}>
				<Image
					source={languageToFlagImage(flashcardCollection.firstLanguage) as ImageSourcePropType}
					style={styles.flagImage}
				/>
				<Image
					source={languageToFlagImage(flashcardCollection.secondLanguage) as ImageSourcePropType}
					style={styles.flagImage}
				/>
			</View>

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
