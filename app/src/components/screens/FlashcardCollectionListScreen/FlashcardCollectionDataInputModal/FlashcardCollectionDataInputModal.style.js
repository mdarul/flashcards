import { Dimensions, StyleSheet } from 'react-native';
import { getPaddingsShorthand, smallFontSize, spacing } from '@globalStyles';

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalView: {
		width: Dimensions.get('window').width * 0.75,
		backgroundColor: 'white',
		borderRadius: spacing * 2,
		shadowColor: 'black',
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		...getPaddingsShorthand(spacing * 4),
	},
	modalTextInput: {
		borderWidth: 1,
		borderColor: 'black',
		borderRadius: spacing,
		...getPaddingsShorthand(spacing, spacing * 2),
	},
	buttonsRow: {
		marginTop: spacing * 3,
		display: 'flex',
		flexDirection: 'row',
	},
	textLanguageInfo: {
		fontSize: smallFontSize,
		marginTop: spacing * 1.5,
		marginBottom: spacing / 2,
	},
});

export default styles;
