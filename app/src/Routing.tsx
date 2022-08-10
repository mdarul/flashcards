import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import FlashcardCollectionModel from './models/dataModels/flashcardCollectionModel';
import StorageItemType from './models/enums/storageItemType';
import { setFlashcardCollection } from './services/redux/slices/flashcardCollectionsSlice';
import { getData, saveData } from './services/storage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './services/redux/store';
import CollectionListScreen from './components/screens/CollectionListScreen/CollectionListScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
	useFonts,
	Lato_400Regular,
  Lato_700Bold
} from '@expo-google-fonts/lato';
import moment from 'moment';
import { setCustomText, setCustomTextInput } from 'react-native-global-props';
import { standardFontSize } from './globalStyles';
import { AppState, AppStateStatus } from 'react-native';

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
      if(value){
        dispatch(setFlashcardCollection(value));
      }
    });
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState: AppStateStatus) => {
      if(nextAppState === 'inactive' || nextAppState === 'unknown' || nextAppState === 'background') {
        saveData(StorageItemType.FLASHCARD_COLLECTIONS, flashcardCollections);
      }
    })

    return () => {
      subscription.remove()
    }
  }, [flashcardCollections]);

  if(!fontsLoaded) {
    return <></>;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'CollectionListScreen'}
          screenOptions={{ headerShown: false }}
        >
        <Stack.Screen
          name={'CollectionListScreen'}
          component={CollectionListScreen}
        />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default Routing;