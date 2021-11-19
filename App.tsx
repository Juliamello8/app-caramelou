import React, { useContext, useEffect } from 'react';
// import AppLoading from "expo-app-loading";
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ContextWrapper, AppContext } from './src/contexts/auth'

import NavigationService, { navigationRef } from './src/services/NavigationService';
import api from './src/services/api'

//FONTS
import AppLoading from 'expo-app-loading';
// import * as Font from 'expo-font';

import {
  useFonts,
  Montserrat_900Black,
  Montserrat_700Bold,
  Montserrat_400Regular_Italic,
  Montserrat_400Regular
} from "@expo-google-fonts/montserrat"

//COMPONENTES
import Login from './src/pages/Login';
import RegisterOng from './src/pages/RegisterOng';
import RegisterHelp from './src/pages/RegisterHelp';
import ProfileSettings from './src/pages/ProfileSettings';
import PhotoWall from './src/pages/PhotoWall';
import ForgotPassword from './src/pages/ForgotPassword';
import Home from './src/pages/Home';
import StrayPet from './src/pages/StrayPet';
import PetLost from './src/pages/PetLost';
import RegisterStrayPet from './src/pages/RegisterStrayPet';
import RegisterPetLost from './src/pages/RegisterPetLost';
import RegisterUser from './src/pages/RegisterUser';
import HelpRequests from './src/pages/HelpRequests';
import PendingOngs from './src/pages/PendingOngs'
import PendingHelpRequests from './src/pages/PendingHelpRequests'
import ListOngs from './src/pages/ListOngs'
import RegisterAdopted from './src/pages/RegisterAdopted'
import MyPosts from './src/pages/MyPosts'
import MyLostPet from './src/pages/MyLostPet'
import MyHelpRequests from './src/pages/MyHelpRequests'
import MyOng from './src/pages/MyOng'

//NAVEGATION
import 'react-native-gesture-handler';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const Wrapper = (): JSX.Element => {
  return <ContextWrapper><App /></ContextWrapper>
}

const MyTheme:Theme = {
  dark: true,
  colors: {
    primary: '#FEAE53',
    background: '#FFFFFF',
    card: '#333333',
    text: '#F2F2F2',
    border: 'none',
    notification: '#CE4A00'
  },
};

const App = (): JSX.Element => {
  const context = useContext(AppContext);

  const [fontsLoaded] = useFonts({
    Montserrat_900Black,
    Montserrat_700Bold,
    Montserrat_400Regular_Italic,
    Montserrat_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  if (context.store.token != '') {
    return (
      <NavigationContainer
        ref={navigationRef}
        theme={MyTheme}
      >
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => context.store.token == ''
                ? NavigationService.navigate("Login")
                : NavigationService.navigate("Home")}
            >
              <MaterialIcons name="arrow-back" size={24} color="#fff" style={{paddingLeft: 25}} />
            </TouchableOpacity>
          )
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: `Olá ${context.user?.name},`,
            headerLeft: () => <></>
          }}
        />
        <Stack.Screen
          name="StrayPet"
          component={StrayPet}
          options={{
            title: "Animais de rua"
          }}
        />
        <Stack.Screen
          name="PetLost"
          component={PetLost}
          options={{
            title: "Animais perdidos"
          }}
        />
        <Stack.Screen
          name="RegisterStrayPet"
          component={RegisterStrayPet}
          options={{
            title: "Cadastro"
          }}
        />
        <Stack.Screen
          name="RegisterPetLost"
          component={RegisterPetLost}
          options={{
            title: "Cadastro"
          }}
        />
        
        <Stack.Screen
          name="HelpRequests"
          component={HelpRequests}
          options={{
            title: "Pedidos de Ajuda"
          }}
        />
        <Stack.Screen
          name="RegisterOng"
          component={RegisterOng}
          options={{
            title: "Cadastro"
          }}
        />
        <Stack.Screen
          name="RegisterHelp"
          component={RegisterHelp}
          options={{
            title: "Cadastro"
          }}
        />
        <Stack.Screen
          name="PhotoWall"
          component={PhotoWall}
          options={{
            title: "Mural de Fotos"
          }}
        />
        <Stack.Screen
          name="ProfileSettings"
          component={ProfileSettings}
          options={{
            title: `${context.user?.name}`,
          }}
        />
        <Stack.Screen
          name="PendingOngs"
          component={PendingOngs}
          options={{
            title: "ONG's Pendentes"
          }}
        />
        <Stack.Screen
          name="PendingHelpRequests"
          component={PendingHelpRequests}
          options={{
            title: "Pedidos de Ajuda"
          }}
        />
        <Stack.Screen
          name="ListOngs"
          component={ListOngs}
          options={{
            title: "Parceiros"
          }}
        />
        <Stack.Screen
          name="RegisterAdopted"
          component={RegisterAdopted}
          options={{
            title: "Adoteei <3"
          }}
        />
        <Stack.Screen
          name="MyPosts"
          component={MyPosts}
          options={{
            title: "Minhas Publicações"
          }}
        />
        <Stack.Screen
          name="MyLostPet"
          component={MyLostPet}
          options={{
            title: "Meu Animal Perdido"
          }}
        />
        <Stack.Screen
          name="MyHelpRequests"
          component={MyHelpRequests}
          options={{
            title: "Meus Pedidos de Ajuda"
          }}
        />
        <Stack.Screen
          name="MyOng"
          component={MyOng}
          options={{
            title: "Minha ONG"
          }}
        />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={MyTheme}
    >
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => NavigationService.navigate('Login')}
            >
              <MaterialIcons name="arrow-back" size={25} />
            </TouchableOpacity>
          )
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
            headerLeft: () => <></>
          }}
        />
        <Stack.Screen
          name="RegisterUser"
          component={RegisterUser}
          options={{
            title: "Cadastrar usuário"
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            title: "Esqueceu a Senha"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
