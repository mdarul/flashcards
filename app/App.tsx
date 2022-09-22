import { Provider } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { store } from '@services/redux';
import Routing from './src/Routing';

const App = () => {
	return (
		<Provider store={store}>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<Routing />
			</GestureHandlerRootView>
		</Provider>
	);
};

export default App;
