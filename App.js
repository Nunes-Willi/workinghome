import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import HomeScreen from './src/screens/Home';
import LoginScreen from './src/screens/Login';
import CadastroScreen from './src/screens/Cadastro';
import DetailScreen from './src/screens/Detail';

import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <PaperProvider>
        <NavigationContainer>
        <StatusBar hidden={true}/>
          <Stack.Navigator screenOptions={{ headerShown: false}}>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Cadastro" component={CadastroScreen} />
              <Stack.Screen name="Detail" component={DetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
  );
}