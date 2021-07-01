
import React from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Provider } from 'react-redux';

import { MoviesScreen } from './src/screens';
import { store, persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react'
import MovieNavigator from './src/navigation/Navigator';
import NavigationService from './src/services/navigationServices';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.screen}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <MovieNavigator
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }} />
        </PersistGate>
      </Provider>
    </View>

  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default App;
