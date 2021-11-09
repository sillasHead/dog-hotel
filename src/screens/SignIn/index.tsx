import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StatusBar } from 'react-native'
import Logo from '../../assets/logo.svg'
import { Button, ButtonOutline, Container, Input, TextButton, TextButtonOutline, View } from '../../components/styles'
import { theme } from '../../global/styles/theme'

export default function SignIn() {
  const navigation = useNavigation()

  function handleSignIn() {
    // navigation.navigate('Enrollment')
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
        <Input placeholder="Login" placeholderTextColor={theme.dark.gray400} />
        <Input placeholder="Senha" placeholderTextColor={theme.dark.gray400} />
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