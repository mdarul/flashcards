/* eslint-disable no-unused-vars */

export enum ButtonType {
	WHITE,
	LIGHT_GREEN,
	BLUE,
}

export interface ButtonProps {
	text: string;
	onPress: () => void;
	type?: ButtonType;
	style?: object;
}
