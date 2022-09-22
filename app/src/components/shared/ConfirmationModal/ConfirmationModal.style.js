import { Dimensions, StyleSheet } from 'react-native';
import { getPaddingsShorthand, spacing } from '@globalStyles';

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
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
	modalInfoText: {
		fontFamily: 'Lato_700Bold',
		marginBottom: spacing,
	},
	modalButtonsRow: {
		marginTop: spacing * 2,
		display: 'flex',
		flexDirection: 'row',
	},
});

export default styles;
