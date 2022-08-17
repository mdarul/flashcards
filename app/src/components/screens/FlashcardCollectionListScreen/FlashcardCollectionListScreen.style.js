import { StyleSheet } from 'react-native';
import { getMarginsShorthand, spacing } from '../../../globalStyles';

const styles = StyleSheet.create({
	addCollectionContainer: {
		...getMarginsShorthand(0, spacing * 2.5),
	},
	collectionsContainer: {
		...getMarginsShorthand(spacing * 2, 0, spacing * 15),
	},
});

export default styles;
