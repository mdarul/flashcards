import { ParamListBase, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import FlashcardCollectionModel from '../../../models/dataModels/flashcardCollectionModel';

export default interface FlashcardCollectionScreenProps {
	navigation: NativeStackNavigationProp<ParamListBase>;
	route: RouteProp<{ params: { flashcardCollection: FlashcardCollectionModel } }>;
}
