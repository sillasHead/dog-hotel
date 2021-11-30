import React, { useState } from 'react'
import { Alert, StatusBar } from 'react-native'
import Logo from 'assets/logo.svg'
import { Button } from 'components/Button'
import {
  StyledContainer,
  StyledInput,
  StyledView
} from 'global/styles/components'
import { theme } from 'global/styles/theme'
import { UserService } from 'services/userService'
import { useUser } from 'context/User'

type Props = {
  navigation: any
}

export function SignIn({ navigation }: Props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setUser } = useUser()

  function handleEnter() {
    UserService.getLogin(email, password)
      .then(response => {
        if (response.data[0]) {
          setUser(response.data[0])
          navigation.navigate('List')
        } else {
          Alert.alert('Login ou Senha incorretos')
        }
      })
      .catch(error => console.log('error UserService.getLogin(email, password) => ',error))
  }

  function handleNewAccount() {
    navigation.navigate('NewUser')
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
        <StyledInput
          placeholder="Login"
          placeholderTextColor={theme.dark.gray400}
          onChangeText={setEmail}
        />
        <StyledInput
          placeholder="Senha"
          secureTextEntry
          placeholderTextColor={theme.dark.gray400}
          onChangeText={setPassword}
        />
      </StyledView>

      <StyledView marginTop="50px">
        <Button stretch onPress={handleEnter}>Entrar</Button>
        <Button stretch type="outline" onPress={handleNewAccount}>Criar nova conta</Button>
      </StyledView>
    </StyledContainer>
  )
}