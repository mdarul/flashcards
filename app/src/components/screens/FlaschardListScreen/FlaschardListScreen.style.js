import { StyleSheet } from 'react-native';
import { getMarginsShorthand, spacing } from '../../../globalStyles';

const styles = StyleSheet.create({
	listContainer: {
		...getMarginsShorthand(spacing * 2, 0, spacing * 7), // TODO figure out what's going on with flatlist cut
	},
});

export default styles;
