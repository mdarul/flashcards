import { BaseToast, BaseToastProps } from 'react-native-toast-message';

const toastConfig = {
	success: (props: BaseToastProps) => (
		<BaseToast
			{...props}
			style={{ borderLeftColor: 'green' }}
			text1Style={{
				fontSize: 15,
			}}
			text2Style={{
				fontSize: 13,
			}}
		/>
	),
	error: (props: BaseToastProps) => (
		<BaseToast
			{...props}
			style={{ borderLeftColor: 'red' }}
			text1Style={{
				fontSize: 18,
			}}
			text2Style={{
				fontSize: 13,
			}}
		/>
	),
};

export default toastConfig;
