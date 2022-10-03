import Toast from 'react-native-toast-message';

export const hideToast = (): void => {
	Toast.hide();
};

export const showSuccessToast = (text: string): void => {
	hideToast();
	setTimeout(() => {
		Toast.show({ type: 'success', text1: text, position: 'bottom' });
	}, 1);
};

export const showErrorToast = (text: string): void => {
	hideToast();
	setTimeout(() => {
		Toast.show({ type: 'error', text1: text, position: 'bottom' });
	}, 1);
};
