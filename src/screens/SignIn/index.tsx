import React from 'react'
import { StatusBar } from 'react-native'
import Logo from 'assets/logo.svg'
import { Button } from 'components/Button'
import {
  StyledContainer,
  StyledInput,
  StyledView
} from 'global/styles/components'
import { theme } from 'global/styles/theme'

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
    <StyledContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Logo />

      <StyledView marginTop="50px">
        <StyledInput placeholder="Login" placeholderTextColor={theme.dark.gray400} />
        <StyledInput placeholder="Senha" secureTextEntry placeholderTextColor={theme.dark.gray400} />
      </StyledView>

      <StyledView marginTop="50px">
          <Button stretch onPress={handleEnter}>Entrar</Button>
          <Button stretch type="outline" onPress={handleNewAccount}>Criar nova conta</Button>
      </StyledView>
    </StyledContainer>
  )
}