import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './ScreenWrapper.style';
import { backgroundGradientEndColor, backgroundGradientStartColor } from '../../../globalStyles';
import { ScreenWrapperProps } from './ScreenWrapper.data';
import LanguagePickerBar from '../LanguagePickerBar/LanguagePickerBar';

const ScreenWrapper = ({ navigation, children, style, showBackArrow = false }: ScreenWrapperProps) => {
	return (
		<LinearGradient
			colors={[backgroundGradientStartColor, backgroundGradientEndColor]}
			style={styles.container}
			start={[0, 0]}
			end={[1, 1]}
		>
			<View style={styles.flagsGoBackContainer}>
				{showBackArrow && navigation && (
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Ionicons name="arrow-back-outline" size={36} color="black" style={styles.goBackIcon} />
					</TouchableOpacity>
				)}
				<LanguagePickerBar style={{ flexGrow: 1 }} />
			</View>
			<View style={[styles.contentContainer, style]}>{children}</View>
		</LinearGradient>
	);
};

export default ScreenWrapper;
