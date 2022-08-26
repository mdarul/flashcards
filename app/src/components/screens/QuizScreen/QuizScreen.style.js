import { StyleSheet } from 'react-native';
import { contentColor, getMarginsShorthand, getPaddingsShorthand, spacing } from '../../../globalStyles';

const styles = StyleSheet.create({
	wrapperContainer: {
		...getPaddingsShorthand(0, spacing * 2, spacing * 2),
	},
	questionContainer: {
		display: 'flex',
		backgroundColor: contentColor,
		borderRadius: spacing * 2.5,
		...getPaddingsShorthand(spacing * 2),
	},
	questionIconsContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	arrowIcon: {
		...getMarginsShorthand(0, spacing * 2),
	},
	flagImage: {
		width: 42,
		height: 21,
		resizeMode: 'contain',
	},
});

export default styles;
