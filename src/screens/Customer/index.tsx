import React from 'react'
import { StyledContainer, StyledInput, StyledTitle, StyledView } from 'global/styles/components'
import { theme } from 'global/styles/theme'
import { Button } from 'components/Button'
import { Footer } from 'components/Footer'

type Props = {
  update?: boolean
  navigation: any
}

export function Customer({ update, navigation }: Props) {

  function handleGoBack() {
    navigation.goBack()
  }

  function handleGoHome() {
    navigation.navigate('List')
  }

  function handleGoSettings() {
    navigation.navigate('Settings')
  }
  
  return (
    <>
      <StyledContainer justifyContent="space-around">
        <StyledTitle>{update ? 'Atualizar dados' : 'Novo cadastro'}</StyledTitle>

        <StyledView>
          <StyledInput placeholder="Nome Completo" placeholderTextColor={theme.dark.gray400} />
          <StyledInput placeholder="CPF" placeholderTextColor={theme.dark.gray400} />
          <StyledInput placeholder="Login" placeholderTextColor={theme.dark.gray400} />
          <StyledInput placeholder="Senha" secureTextEntry placeholderTextColor={theme.dark.gray400} />
        </StyledView>

        <StyledView>
          <Button stretch>
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