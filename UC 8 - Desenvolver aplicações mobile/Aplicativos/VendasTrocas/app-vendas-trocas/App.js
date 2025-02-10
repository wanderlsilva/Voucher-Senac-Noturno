// Importação das bibliotecas necessárias
import React from "react";
import { NavigationContainer } from "@react-navigation/native"; // Gerencia a navegação no aplicativo
import { createStackNavigator } from '@react-navigation/stack'; // Cria a pilha de navegação (Stack Navigator)

// Importação das telas que serão utilizadas na navegação
import Dashboard from "./src/screens/Dashboard";
import SplashScreen from "./src/screens/SplashScreen";
import CadastroUsuario from "./src/screens/CadastroUsuario";
import Login from "./src/screens/Login";

// Criação do Stack Navigator (responsável por empilhar as telas)
const Stack = createStackNavigator();

// Componente principal do aplicativo
export default function App() {
  return (
    // O NavigationContainer envolve toda a estrutura de navegação do app
    <NavigationContainer>
      
      {/* Stack.Navigator define o fluxo de navegação entre as telas */}
      <Stack.Navigator initialRouteName="SplashScreen"> 
        {/* Define a tela de SplashScreen como a primeira tela a ser exibida */}
        
        {/* Tela de SplashScren */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }} // Oculta o cabeçalho da splash
        />
        
        {/* Tela de Login */}
        <Stack.Screen
          name="Login" // Nome da tela (usado na navegação)
          component={Login} // Componente correspondente à tela
          options={{ title: 'Login' }} // Configuração do título que aparece no cabeçalho da tela
        />

        {/* Tela de Cadastro */}
        <Stack.Screen
          name="CadastroUsuario" // Nome da tela (usado na navegação)
          component={CadastroUsuario} // Componente correspondente à tela
          options={{ title: 'Cadastro' }} // Configuração do título do cabeçalho
        />
        
        {/* Tela de Dashboard */}
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ title: "Dashboard" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

// O NavigationContainer é o provedor de navegação do React Navigation, garantindo que as telas possam ser gerenciadas corretamente.
// O createStackNavigator cria um sistema de navegação baseado em pilha (Stack), permitindo alternar entre as telas.
// O Stack.Navigator define quais telas pertencem à pilha de navegação.
// Cada Stack.Screen representa uma tela do aplicativo.
// O initialRouteName="CadastroUsuario" define que a tela de Cadastro será a primeira exibida ao abrir o app.