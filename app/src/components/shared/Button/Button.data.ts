/* eslint-disable no-unused-vars */

import { ButtonType } from '@models/enums';

export interface ButtonProps {
	text: string;
	onPress: () => void;
	type?: ButtonType;
	style?: object;
}
