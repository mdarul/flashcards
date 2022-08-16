/* eslint-disable camelcase, react/jsx-no-useless-fragment */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import moment from 'moment';
import { setCustomText, setCustomTextInput } from 'react-native-global-props';
import { AppState, AppStateStatus } from 'react-native';
import FlashcardCollectionModel from './models/dataModels/flashcardCollectionModel';
import StorageItemType from './models/enums/storageItemType';
import { setFlashcardCollections } from './services/redux/slices/flashcardCollectionsSlice';
import { getData, saveData } from './services/storage';
import { RootState } from './services/redux/store';
import CollectionListScreen from './components/screens/CollectionListScreen/CollectionListScreen';
import { standardFontSize } from './globalStyles';
import Navigation from './models/enums/navigation';
import FlashcardCollectionScreen from './components/screens/FlashcardCollectionScreen/FlashcardCollectionScreen';

const Stack = createNativeStackNavigator();

const Routing = () => {
	const [fontsLoaded] = useFonts({ Lato_400Regular, Lato_700Bold });
	const dispatch = useDispatch();
	const flashcardCollections = useSelector((state: RootState) => state.flashcardCollectionsReducer.flashcardCollections);
	const language = useSelector((state: RootState) => state.userSettingsReducers.language);

	useEffect(() => {
		moment.locale(language);
	}, [language]);

	useEffect(() => {
		if (fontsLoaded) {
			setCustomText({
				style: { fontFamily: 'Lato_400Regular', fontSize: standardFontSize, color: '#302F41' },
			});
			setCustomTextInput({
				style: { fontFamily: 'Lato_400Regular', fontSize: standardFontSize, color: '#302F41' },
			});
		}
	}, [fontsLoaded]);

	useEffect(() => {
		getData(StorageItemType.FLASHCARD_COLLECTIONS).then((value: FlashcardCollectionModel[] | null) => {
			if (value) {
				dispatch(setFlashcardCollections(value));
			}
		});
	}, [dispatch]);

	useEffect(() => {
		const subscription = AppState.addEventListener('change', (nextAppState: AppStateStatus) => {
			if (nextAppState === 'inactive' || nextAppState === 'unknown' || nextAppState === 'background') {
				saveData(StorageItemType.FLASHCARD_COLLECTIONS, flashcardCollections);
			}
		});

		return () => {
			subscription.remove();
		};
	}, [flashcardCollections]);

	if (!fontsLoaded) {
		return <></>;
	}

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName={Navigation.FlashcardCollectionListScreen}
					screenOptions={{ headerShown: false }}
				>
					<Stack.Screen name={Navigation.FlashcardCollectionListScreen} component={CollectionListScreen} />
					<Stack.Screen name={Navigation.FlashcardCollectionScreen} component={FlashcardCollectionScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaView>
	);
};

export default Routing;
