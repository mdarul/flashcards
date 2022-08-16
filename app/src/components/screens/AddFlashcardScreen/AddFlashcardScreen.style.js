import { StyleSheet } from 'react-native';
import { getPaddingsShorthand, spacing } from '../../../globalStyles';

const styles = StyleSheet.create({
	screenWrapper: {
		...getPaddingsShorthand(spacing * 2.5),
	},
});

export default styles;
