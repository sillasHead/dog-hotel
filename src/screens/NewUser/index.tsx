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
import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { UserService } from 'services/userService'

type Props = {
  route: any
  navigation: any
}

export function NewUser({ navigation, route }: Props) {
  const update: boolean = route?.params?.update ?? false

  const [inputName, setInputName] = useState('')
  const [inputPhone, setInputPhone] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  const { user, setUser } = useUser()

  useEffect(() => {
    if (update && user) {
      setInputName(user.name)
      setInputPhone(user.phone)
      setInputEmail(user.email)
      setInputPassword(user.password)
    }
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
    } 

    if (update && user) {
      UserService.put({
        id: user.id,
        name: inputName,
        phone: inputPhone,
        email: inputEmail,
        password: inputPassword
      })
        .then(() => {
          Alert.alert('Dados atualizados com sucesso!')
          setUser({
            name: inputName,
            phone: inputPhone,
            email: inputEmail,
            password: inputPassword
          })
          handleGoHome()
        })
        .catch(error => console.log('error UserService.put(user) => ', error))
    } else {
      UserService.checkEmail(inputEmail)
        .then(response => {
          if (response.data[0]) {
            Alert.alert('Email já cadastrado')
          }
          else {
            UserService.post({
              name: inputName,
              phone: inputPhone,
              email: inputEmail,
              password: inputPassword
            })
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
  }

  return (
    <>
      <StyledContainer justifyContent="space-around">
        <StyledTitle>{update ? 'Atualizar dados' : 'Novo cadastro'}</StyledTitle>

        <StyledView>
          <StyledInput
            defaultValue={inputName}
            placeholder="Nome Completo"
            placeholderTextColor={theme.dark.gray400}
            onChangeText={setInputName}
          />
          <StyledInput
            defaultValue={inputPhone}
            placeholder="Telefone"
            placeholderTextColor={theme.dark.gray400}
            onChangeText={setInputPhone}
            keyboardType="phone-pad"
          />
          <StyledInput
            defaultValue={inputEmail}
            placeholder="Login"
            placeholderTextColor={theme.dark.gray400}
            onChangeText={setInputEmail}
          />
          <StyledInput
            defaultValue={inputPassword}
            placeholder={update ? "Nova Senha" : "Senha"} secureTextEntry
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