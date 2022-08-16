import React from 'react';
import { Image, ImageSourcePropType, Text, TextInput, View } from 'react-native';
import { globalStyles } from '../../../../globalStyles';
import { languageToFlagImage } from '../../../../services/flagService';
import { getLanguageFullName } from '../../../../services/translationService';
import TranslationInputProps from './TranslationInput.data';
import styles from './TranslationInput.style';

const TranslationInput = ({ text, setText, language, style, placeholder }: TranslationInputProps) => {
	return (
		<View style={style}>
			<View style={styles.languageInfo}>
				<Image source={languageToFlagImage(language) as ImageSourcePropType} style={globalStyles.smallFlagImage} />
				<Text style={styles.languageText}>{getLanguageFullName(language)}</Text>
			</View>
			<TextInput onChangeText={setText} value={text} style={styles.textInput} placeholder={placeholder} />
		</View>
	);
};

export default TranslationInput;
