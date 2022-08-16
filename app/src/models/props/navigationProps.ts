import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default interface NavigationProps {
	navigation: NativeStackNavigationProp<ParamListBase>;
}
