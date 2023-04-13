import {StatusBar} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import AppNavigator from './navigation';
import {styles} from './themes';
import CSafeAreaView from './components/common/CSafeAreaView';
import {LogBox} from 'react-native';
import  {useEffect} from 'react';
import "./ignoreWarnings";

const App = () => {
useEffect(() => {

LogBox.ignoreAllLogs(true)
  }, []);
  const colors = useSelector(state => state.theme.theme);

  return (
    <CSafeAreaView style={styles.flex}>
      <StatusBar
        barStyle={colors.dark == 'dark' ? 'light-content' : 'dark-content'}
      />
      <AppNavigator />
    </CSafeAreaView>
  );
};

export default App;
