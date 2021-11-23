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
import routes from '../../routes'

type Props = {
  navigation: any
}

export default function SignIn({ navigation }: Props) {
  function handleEnter() {
    navigation.navigate(routes.SELECTION)
  }
  
  function handleNewAccount() {
    navigation.navigate(routes.CUSTOMER)
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
        <Input placeholder="Senha" secureTextEntry={true} placeholderTextColor={theme.dark.gray400} />
      </View>

      <View>
          <Button onPress={handleEnter}>Entrar</Button>
          <Button type="outline" onPress={handleNewAccount}>Criar nova conta</Button>
      </View>
    </Container>
  )
}