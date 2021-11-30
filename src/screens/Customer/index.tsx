import { Button } from 'components/Button'
import { Footer } from 'components/Footer'
import {
  StyledContainer,
  StyledInput,
  StyledTitle,
  StyledView
} from 'global/styles/components'
import { theme } from 'global/styles/theme'
import { User } from 'global/types/User'
import React, { useState } from 'react'
import { UserService } from 'services/userService'

type Props = {
  update?: boolean
  navigation: any
}

export function Customer({ update, navigation }: Props) {

  const [inputName, setInputName] = useState('')
  const [inputPhone, setInputPhone] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputPassword, setInputPassword] = useState('')

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
    const user: User = {
      name: inputName,
      phone: inputPhone,
      email: inputEmail,
      password: inputPassword
    }

    UserService.postUser(user)
  }

  return (
    <>
      <StyledContainer justifyContent="space-around">
        <StyledTitle>{update ? 'Atualizar dados' : 'Novo cadastro'}</StyledTitle>

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
            {update ? 'Atualizar' : 'Cadastrar'}
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