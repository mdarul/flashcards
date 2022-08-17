import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface ScreenWrapperProps {
	navigation?: NativeStackNavigationProp<ParamListBase>;
	children?: JSX.Element | (JSX.Element | boolean)[];
	style?: object;
	showBackArrow?: boolean;
}
