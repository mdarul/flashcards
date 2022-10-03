import { Provider } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { store } from '@services/redux';
import Toast from 'react-native-toast-message';
import toastConfig from '@services/translationService/translationServiceConfig';
import Routing from './src/Routing';

const App = () => {
	return (
		<Provider store={store}>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<Routing />
				<Toast config={toastConfig} />
			</GestureHandlerRootView>
		</Provider>
	);
};

export default App;
