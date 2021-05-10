import React from 'react';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import WrappedApp from './WrappedApp';

const App = () => {
	return (
		<Provider store={store}>
			<WrappedApp />
		</Provider>
	);
};

export default App;
