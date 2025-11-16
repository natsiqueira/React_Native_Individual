import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import React from 'react';
import { StatusBar } from 'react-native';
import { AppRoutes } from './src/routers';

function MainApp() {
  return (

    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      <AppRoutes />
      
    </NavigationContainer>
  );
}

registerRootComponent(MainApp);

export default MainApp;