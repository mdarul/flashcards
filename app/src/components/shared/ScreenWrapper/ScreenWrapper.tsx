import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './ScreenWrapper.style';
import { backgroundGradientEndColor, backgroundGradientStartColor } from '../../../globalStyles';
import { ScreenWrapperProps } from './ScreenWrapper.data';
import LanguagePickerBar from '../LanguagePickerBar/LanguagePickerBar';

const ScreenWrapper = ({ children, style }: ScreenWrapperProps) => {
	return (
		<LinearGradient
			colors={[backgroundGradientStartColor, backgroundGradientEndColor]}
			style={[styles.container, style]}
			start={[0, 0]}
			end={[1, 1]}
		>
			<LanguagePickerBar />
			{children}
		</LinearGradient>
	);
};

export default ScreenWrapper;
