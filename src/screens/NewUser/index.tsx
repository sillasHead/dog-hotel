import { Button } from 'components/Button'
import { Footer } from 'components/Footer'
import { useUser } from 'context/User'
import {
  StyledContainer,
  StyledInput,
  StyledTitle,
  StyledView
} from 'global/styles/components'
import { theme } from 'global/styles/theme'
import { User } from 'global/types/User'
import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { UserService } from 'services/userService'

type Props = {
  route: any
  navigation: any
}

export function NewUser({ navigation, route }: Props) {
  const { update } = route.params

  const [inputName, setInputName] = useState('')
  const [inputPhone, setInputPhone] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  const { setUser } = useUser()

  useEffect(() => {
    console.log(update)
  }, [])

  function handleGoBack() {
    navigation.goBack()
  }

  function handleGoHome() {
    navigation.navigate('List')
  }

  function handleGoSettings() {
    navigation.navigate('Settings')
  }

  function submit() {
    if (!inputName || !inputPhone || !inputEmail || !inputPassword) {
      Alert.alert('Preencha todos os campos')
      return
    } // TODO
    const user: User = {
      name: inputName,
      phone: inputPhone,
      email: inputEmail,
      password: inputPassword
    }

    UserService.checkEmail(user.email)
      .then(response => {
        if (response.data[0]) {
          Alert.alert('Email já cadastrado')
        }
        else {
          UserService.postUser(user)
            .then(response => {
              setUser(response.data)
              handleGoHome()
            })
            .catch(error => {
              console.log('error UserService.postUser(user) => ', error)
            })
        }
      })
      .catch(error => console.log('error UserService.checkEmail(user.email) => ', error))
  }

  return (
    <>
      <StyledContainer justifyContent="space-around">
        <StyledTitle>{route ? 'Atualizar dados' : 'Novo cadastro'}</StyledTitle>

        <StyledView>
          <StyledInput
            placeholder="Nome Completo"
            placeholderTextColor={theme.dark.gray400}
            onChangeText={setInputName}
          />
          <StyledInput
            placeholder="Telefone"
            placeholderTextColor={theme.dark.gray400}
            onChangeText={setInputPhone}
            keyboardType="phone-pad"
          />
          <StyledInput
            placeholder="Login"
            placeholderTextColor={theme.dark.gray400}
            onChangeText={setInputEmail}
          />
          <StyledInput
            placeholder="Senha" secureTextEntry
            placeholderTextColor={theme.dark.gray400}
            onChangeText={setInputPassword}
          />
        </StyledView>

        <StyledView>
          <Button stretch onPress={submit}>
            {route ? 'Atualizar' : 'Cadastrar'}
          </Button>
        </StyledView>
      </StyledContainer>
      <Footer
        goBack={handleGoBack}
        goHome={handleGoHome}
        goSettings={handleGoSettings}
      />
    </>
  )
}