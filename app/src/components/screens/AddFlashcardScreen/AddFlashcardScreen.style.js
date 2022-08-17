import { StyleSheet } from 'react-native';
import { getPaddingsShorthand, spacing } from '../../../globalStyles';

const styles = StyleSheet.create({
	screenWrapper: {
		...getPaddingsShorthand(0, spacing * 2.5, spacing * 2.5),
	},
});

export default styles;
