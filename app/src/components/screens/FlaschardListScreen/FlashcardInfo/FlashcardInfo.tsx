import { Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './FlashcardInfo.style';
import FlashcardInfoProps from './FlashcardInfo.data';

const FlashcardInfo = ({ flashcard, onDeletePressed, onEditPressed, style }: FlashcardInfoProps) => {
	return (
		<View style={[styles.container, style]}>
			<Text style={styles.collectionNameText}>
				{flashcard.text}: {flashcard.translatedText}
			</Text>

			<View style={styles.icons}>
				<TouchableOpacity style={styles.iconWrapper} onPress={() => onEditPressed(flashcard)}>
					<Feather name="edit-2" size={24} color="black" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.lastIconWrapper} onPress={() => onDeletePressed(flashcard)}>
					<Feather name="trash-2" size={24} color="black" />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default FlashcardInfo;
