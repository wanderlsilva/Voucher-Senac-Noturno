import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import CadastroUsuario from "./src/screens/CadastroUsuario";
import Login from "./src/screens/Login";

const Stack = createStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "CadastroUsuario">
        <Stack.Screen
        name = "CadastroUsuario"
        component = {CadastroUsuario}
        options = {{ title: 'Cadastro' }}
        />
        <Stack.Screen
        name = "Login"
        component = {Login}
        options = {{ title: 'Login' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}