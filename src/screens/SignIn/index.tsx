import {
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold,
  Rubik_900Black, useFonts
} from '@expo-google-fonts/rubik'
import AppLoading from 'expo-app-loading'
import React from 'react'
import { StatusBar } from 'react-native'
import Logo from '../../assets/logo.svg'
import { theme } from '../../global/styles/theme'
import { Button, ButtonOutline, Container, Input, TextButton, TextButtonOutline, View } from './styles'

export default function SignIn() {
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
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Logo />

      <View>
        <Input placeholder="Login" placeholderTextColor={theme.dark.gray} />
        <Input placeholder="Senha" placeholderTextColor={theme.dark.gray} />
      </View>

      <View>
        <Button onPress={() => null}>
          <TextButton>Entrar</TextButton>
        </Button>
        <ButtonOutline onPress={() => null}>
          <TextButtonOutline>Criar nova conta</TextButtonOutline>
        </ButtonOutline>
      </View>
    </Container>
  )
}