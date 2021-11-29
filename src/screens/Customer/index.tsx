import React, { ElementType, useRef } from 'react'
import {
  StyledContainer,
  StyledInput,
  StyledTitle,
  StyledView
} from 'global/styles/components'
import { theme } from 'global/styles/theme'
import { Button } from 'components/Button'
import { Footer } from 'components/Footer'
import { TextInput } from 'react-native'

type Props = {
  update?: boolean
  navigation: any
}

export function Customer({ update, navigation }: Props) {

  const inputNameRef = useRef<TextInput>(null)
  const inputPhoneRef = useRef<TextInput>(null)
  const inputEmailRef = useRef<TextInput>(null)

  function handleGoBack() {
    navigation.goBack()
  }

  function handleGoHome() {
    navigation.navigate('List')
  }

  function handleGoSettings() {
    navigation.navigate('Settings')
  }

  function test() {
    console.log(inputEmailRef.current?.props.value)
  }

  return (
    <>
      <StyledContainer justifyContent="space-around">
        <StyledTitle>{update ? 'Atualizar dados' : 'Novo cadastro'}</StyledTitle>

        <StyledView>
          <StyledInput<ElementType>
            placeholder="Nome Completo"
            placeholderTextColor={theme.dark.gray400}
            ref={inputNameRef}
          />
          <StyledInput<ElementType>
            placeholder="Telefone"
            placeholderTextColor={theme.dark.gray400}
            ref={inputPhoneRef}
          />
          <StyledInput<ElementType>
            placeholder="Login"
            placeholderTextColor={theme.dark.gray400}
            ref={inputEmailRef}
          />
          <StyledInput
            placeholder="Senha" secureTextEntry
            placeholderTextColor={theme.dark.gray400}
          />
        </StyledView>

        <StyledView>
          <Button stretch onPress={test}>
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