import { Provider } from 'react-redux';
import store from './src/services/redux/store';
import Routing from './src/Routing';

export default function App() {
	return (
		<Provider store={store}>
			<Routing />
		</Provider>
	);
}
