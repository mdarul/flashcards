import { Language } from '@models/enums';
import { StyleProps } from '@models/props';
import { Image, ImageSourcePropType, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { languageToFlagImage } from '@services/flagService';
import { RootState, setLanguage } from '@services/redux';
import styles from './LanguagePickerBar.style';

const LanguagePickerBar = ({ style }: StyleProps) => {
	const dispatch = useDispatch();
	const language = useSelector((rootState: RootState) => rootState.userSettingsReducers.language);

	return (
		<View style={[styles.flagsContainer, style]}>
			<TouchableOpacity onPress={() => dispatch(setLanguage(Language.ENGLISH))} style={styles.languageContainer}>
				<Image
					source={languageToFlagImage(Language.ENGLISH) as ImageSourcePropType}
					style={[styles.languageFlag, language === Language.ENGLISH ? styles.selectedLanguageFlag : {}]}
				/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => dispatch(setLanguage(Language.POLISH))} style={styles.lastLanguageContainer}>
				<Image
					source={languageToFlagImage(Language.POLISH) as ImageSourcePropType}
					style={[styles.languageFlag, language === Language.POLISH ? styles.selectedLanguageFlag : {}]}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default LanguagePickerBar;
