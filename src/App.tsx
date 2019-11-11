import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { YellowBox, StatusBar } from 'react-native';
import Moment from 'react-moment';
import moment from 'moment/min/moment-with-locales';

import AppNavigator from '~/src/AppNavigator';
import { store, persistor } from './store';

import { colors } from './styles/theme';

// Configura a instância utilizada do moment
moment.suppressDeprecationWarnings = true;
Moment.globalMoment = moment;

// Configura o locale padrão do react-moment
Moment.globalLocale = 'pt-br';

YellowBox.ignoreWarnings([
  'Warning: RCTBridge',
  'Warning: componentWillMount',
  'Warning: componentWillReceiveProps',
]);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor={colors.PURPLE} barStyle="light-content" />
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
