import { FlashcardCollectionModel } from '@models/dataModels';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default interface FlashcardCollectionScreenProps {
	navigation: NativeStackNavigationProp<ParamListBase>;
	route: RouteProp<{ params: { flashcardCollection: FlashcardCollectionModel } }>;
}
