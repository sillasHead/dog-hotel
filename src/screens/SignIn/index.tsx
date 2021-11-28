import React from 'react'
import { StatusBar } from 'react-native'
import Logo from '../../assets/logo.svg'
import { Button } from '../../components/Button'
import {
  Container,
  Input,
  View
} from '../../global/styles/components'
import { theme } from '../../global/styles/theme'

type Props = {
  navigation: any
}

export function SignIn({ navigation }: Props) {
  function handleEnter() {
    navigation.navigate('List')
  }
  
  function handleNewAccount() {
    navigation.navigate('Customer')
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Logo />

      <View marginTop="50px">
        <Input placeholder="Login" placeholderTextColor={theme.dark.gray400} />
        <Input placeholder="Senha" secureTextEntry placeholderTextColor={theme.dark.gray400} />
      </View>

      <View marginTop="50px">
          <Button stretch onPress={handleEnter}>Entrar</Button>
          <Button stretch type="outline" onPress={handleNewAccount}>Criar nova conta</Button>
      </View>
    </Container>
  )
}