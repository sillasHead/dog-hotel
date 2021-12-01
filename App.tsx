import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold,
  Rubik_900Black
} from '@expo-google-fonts/rubik'
import { UserProvider, useUser } from 'context/User'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import light from 'global/themes/light'
import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { Background } from './src/components/Background'
import { Routes } from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
    Rubik_900Black
  })

  if (!fontsLoaded) { // se não carregou as fontes
    // segurar a tela splash enquanto carrega as fontes
    return <AppLoading />
  }


  return (
    <UserProvider>
      <Background>
        <StatusBar style="auto" />
        <Routes />
      </Background>
    </UserProvider>
  )
}
