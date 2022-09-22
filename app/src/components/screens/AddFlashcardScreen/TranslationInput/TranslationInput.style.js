import { StyleSheet } from 'react-native';
import { getPaddingsShorthand, spacing } from '@globalStyles';

const styles = StyleSheet.create({
	textInput: {
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: spacing,
		backgroundColor: 'rgba(255,255,255,0.2)',
		...getPaddingsShorthand(spacing, spacing * 2),
	},
	languageInfo: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: spacing,
	},
	languageText: {
		marginLeft: spacing,
		fontFamily: 'Lato_700Bold',
	},
});

export default styles;
