import { createStore, Store, AnyAction } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import { CityState } from './city/types';
import cityReducer from './city/reducers';

export type ApplicationState = CityState;
const rootReducer = cityReducer;

// Configuração do redux-persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

let store: Store = createStore(persistedReducer);
let persistor = persistStore(store);

export { store, persistor };
