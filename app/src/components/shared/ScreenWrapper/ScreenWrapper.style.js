import { StyleSheet } from 'react-native';
import { spacing } from '../../../globalStyles';

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		display: 'flex',
	},
	flagsGoBackContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	goBackIcon: {
		marginLeft: spacing * 2,
	},
	contentContainer: {
		flexGrow: 1,
		width: '100%',
		display: 'flex',
	},
});

export default styles;
