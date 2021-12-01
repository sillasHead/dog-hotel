import { Button } from 'components/Button'
import { Footer } from 'components/Footer'
import { useUser } from 'context/User'
import {
  StyledContainer,
  StyledInput,
  StyledTitle,
  StyledView
} from 'global/styles/components'
import React, { useContext, useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { UserService } from 'services/userService'
import { ThemeContext } from 'styled-components/native'

type Props = {
  route: any
  navigation: any
}

export function NewUser({ navigation, route }: Props) {
  const update: boolean = route?.params?.update ?? false

  const [inputName, setInputName] = useState('')
  const [inputCpf, setInputCpf] = useState('')
  const [inputPhone, setInputPhone] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  const { colors } = useContext(ThemeContext)
  const { user, setUser } = useUser()

  useEffect(() => {
    if (update && user) {
      setInputName(user.name)
      setInputCpf(user.cpf)
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
    if (!inputName || !inputCpf || !inputPhone || !inputEmail || !inputPassword) {
      Alert.alert('Preencha todos os campos')
      return
    }

    if (update && user) {
      UserService.put({
        id: user.id,
        name: inputName,
        cpf: inputCpf,
        phone: inputPhone,
        email: inputEmail,
        password: inputPassword
      })
        .then(() => {
          Alert.alert('Dados atualizados com sucesso!')
          setUser({
            ...user,
            name: inputName,
            phone: inputPhone,
            email: inputEmail,
            password: inputPassword
          })
          handleGoHome()
        })
        .catch(error => {console.log('error UserService.put(user) => ', error); console.log(user.id)})
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
              cpf: inputCpf,
              email: inputEmail,
              password: inputPassword
            })
              .then(response => {
                Alert.alert('Cadastro realizado com sucesso!')
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
            placeholderTextColor={colors.gray400}
            onChangeText={setInputName}
          />
          <StyledInput
            defaultValue={inputCpf}
            placeholder="CPF"
            placeholderTextColor={colors.gray400}
            onChangeText={setInputCpf}
          />
          <StyledInput
            defaultValue={inputPhone}
            placeholder="Telefone"
            placeholderTextColor={colors.gray400}
            onChangeText={setInputPhone}
            keyboardType="phone-pad"
          />
          <StyledInput
            defaultValue={inputEmail}
            placeholder="Login"
            placeholderTextColor={colors.gray400}
            onChangeText={setInputEmail}
          />
          <StyledInput
            defaultValue={inputPassword}
            placeholder={update ? "Nova Senha" : "Senha"} secureTextEntry
            placeholderTextColor={colors.gray400}
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