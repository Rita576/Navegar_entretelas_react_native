import React, {useState,useEffect} from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/Home';
import Calculadora from './views/Calculadora';
import Imc from './views/Imc';
import Perfil from './views/Perfil';


export default function App() {

  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Calculadora" component={Calculadora} />
          <Stack.Screen name="Imc" component={Imc} />
          <Stack.Screen name="Perfil" component={Perfil} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}