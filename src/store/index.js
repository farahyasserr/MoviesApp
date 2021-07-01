import { combineReducers, createStore } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moviesReducer from './reducers/moviesReducer';
import { persistStore, persistReducer } from 'redux-persist'


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist:['searchHistory']
}

const rootReducer = combineReducers({
    movies:  persistReducer(persistConfig, moviesReducer)
})

let store = createStore(rootReducer)
let persistor = persistStore(store)

export {
    store,
    persistor
}