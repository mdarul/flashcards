import { StyleSheet } from 'react-native';
import { getMarginsShorthand, spacing } from '@globalStyles';

const styles = StyleSheet.create({
	buttonHeight: {
		minHeight: 65,
	},
	buttonMarginY: {
		...getMarginsShorthand(0, spacing * 2.5),
	},
	buttonMarginTop: {
		marginTop: spacing * 2.5,
	},
});

export default styles;
