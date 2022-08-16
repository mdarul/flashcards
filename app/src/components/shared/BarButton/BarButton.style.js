import { StyleSheet } from 'react-native';
import { contentColor, getPaddingsShorthand, largeFontSize, spacing } from '../../../globalStyles';

const styles = StyleSheet.create({
	buttonContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: spacing * 2.5,
		backgroundColor: contentColor,
		...getPaddingsShorthand(spacing * 2),
	},
	buttonText: {
		fontSize: largeFontSize,
		color: '#302F41',
		fontFamily: 'Lato_700Bold',
		textAlign: 'center',
	},
});

export default styles;
