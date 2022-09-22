import { StyleSheet } from 'react-native';
import { contentColor, getMarginsShorthand, getPaddingsShorthand, largestFontSize, spacing } from '@globalStyles';

const styles = StyleSheet.create({
	wrapperContainer: {
		...getPaddingsShorthand(0, spacing * 2, spacing * 2),
	},
	questionContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: contentColor,
		borderRadius: spacing * 2.5,
		...getPaddingsShorthand(spacing * 2),
	},
	translationText: {
		fontSize: largestFontSize,
		fontFamily: 'Lato_700Bold',
		marginBottom: spacing,
	},
	questionIconsContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	arrowIcon: {
		...getMarginsShorthand(0, spacing * 2),
	},
	flagImage: {
		width: 42,
		height: 21,
		resizeMode: 'contain',
	},
	answerContainer: {
		display: 'flex',
		alignItems: 'center',
		marginTop: spacing * 3,
		backgroundColor: contentColor,
		borderRadius: spacing * 2.5,
		...getPaddingsShorthand(spacing * 3, spacing * 2),
	},
	congratulationsText: {
		textAlign: 'center',
		...getMarginsShorthand(spacing * 2),
	},
});

export default styles;
