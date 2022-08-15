import { StyleSheet } from 'react-native';
import { getPaddingsShorthand, spacing } from '../../../globalStyles';

const styles = StyleSheet.create({
	flagsContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	languageFlag: {
		width: 42,
		height: 21,
		resizeMode: 'contain',
		opacity: 0.2,
	},
	selectedLanguageFlag: {
		opacity: 1,
	},
	languageContainer: {
		...getPaddingsShorthand(spacing * 2, spacing),
	},
	lastLanguageContainer: {
		...getPaddingsShorthand(spacing * 2, spacing * 2, spacing * 2, spacing),
	},
});

export default styles;
