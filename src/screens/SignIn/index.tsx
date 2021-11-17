import React from 'react'
import { StatusBar } from 'react-native'
import Logo from '../../assets/logo.svg'
import { Button } from '../../components/Button'
import {
  Container,
  Input, 
  TextButtonOutline,
  View
} from '../../global/styles/components'
import { theme } from '../../global/styles/theme'

type Props = {
  navigation: any
}

export default function SignIn({ navigation }: Props) {
  function handleEnter() {
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

      <View>
        <Input placeholder="Login" placeholderTextColor={theme.dark.gray400} />
        <Input placeholder="Senha" secureTextEntry={true} placeholderTextColor={theme.dark.gray400} />
      </View>

      <View>
          <Button onPress={handleEnter}>Entrar</Button>
          <TextButtonOutline>Criar nova conta</TextButtonOutline>
      </View>
    </Container>
  )
}