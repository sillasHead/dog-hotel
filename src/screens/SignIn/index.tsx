import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StatusBar } from 'react-native'
import Logo from '../../assets/logo.svg'
import { TouchableOpacity, TouchableOpacityOutline, Container, Input, TextButton, TextButtonOutline, View } from '../../global/styles/components'
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
        <TouchableOpacity onPress={() => null}>
          <TextButton>Entrar</TextButton>
        </TouchableOpacity>
        <TouchableOpacityOutline onPress={() => null}>
          <TextButtonOutline>Criar nova conta</TextButtonOutline>
        </TouchableOpacityOutline>
      </View>
    </Container>
  )
}