import { StyleSheet } from 'react-native';
import { getMarginsShorthand, spacing } from '../../../globalStyles';

const styles = StyleSheet.create({
	addFlashcardContainer: {
		...getMarginsShorthand(0, spacing * 2.5),
	},
});

export default styles;
