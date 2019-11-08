import { createStore, Store, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import citiesReducer from './cities/reducers';
import locationsReducer from './locations/reducers';

const rootReducer = combineReducers({
  cities: citiesReducer,
  locations: locationsReducer,
});
export type ApplicationState = ReturnType<typeof rootReducer>;

// Configuração do redux-persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

let store: Store = createStore(persistedReducer);
let persistor = persistStore(store);

export { store, persistor };
