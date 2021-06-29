
import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { combineReducers, createStore } from 'redux';
import {Provider} from 'react-redux';

import moviesReducer from './src/store/reducers/moviesReducer';

import {MoviesScreen} from './src/screens';

const rootReducer = combineReducers({
  movies: moviesReducer
})
const store = createStore(rootReducer);


const App=()=> {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.screen}>
    <Provider  store = {store}>
       <MoviesScreen/>
    </Provider>
    </View>

  );
};

const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});

export default App;
