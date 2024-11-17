import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import { StatusBar } from 'react-native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1e1e1e',
    accent: '#4CAF50',
    background: '#121212',
    surface: '#1f1f1f',
    text: '#e0e0e0',
    placeholder: '#888',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <NavigationContainer theme={NavigationDarkTheme}>
        <AppNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
