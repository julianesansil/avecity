import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { YellowBox } from 'react-native';
import Moment from 'react-moment';
import moment from 'moment/min/moment-with-locales';

import AppNavigator from '~/src/AppNavigator';
import { store, persistor } from './store';

// Configura a instância utilizada do moment
moment.suppressDeprecationWarnings = true;
Moment.globalMoment = moment;

// Configura o locale padrão do react-moment
Moment.globalLocale = 'pt-br';

YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps']);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
