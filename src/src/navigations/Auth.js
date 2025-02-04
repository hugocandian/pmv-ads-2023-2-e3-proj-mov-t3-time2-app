import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login';
import Register from '../pages/Register'
import Projeto from '../pages/Projeto';
import NovoProjeto from '../pages/NovoProjeto';

const Stack = createNativeStackNavigator();

const Main = () => {

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          header: () => null,
        }}
      />
       <Stack.Screen name="Projeto" component={Projeto} />
        <Stack.Screen name="NovoProjeto" component={NovoProjeto} />
    </Stack.Navigator>

  );

}

export default Main;