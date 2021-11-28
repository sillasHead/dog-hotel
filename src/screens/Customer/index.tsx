import React from 'react'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Container, Input, Title, View } from '../../global/styles/components'
import { theme } from '../../global/styles/theme'

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
      <Container justifyContent="space-around">
        <Title>{update ? 'Atualizar dados' : 'Novo cadastro'}</Title>

        <View>
          <Input placeholder="Nome Completo" placeholderTextColor={theme.dark.gray400} />
          <Input placeholder="CPF" placeholderTextColor={theme.dark.gray400} />
          <Input placeholder="Login" placeholderTextColor={theme.dark.gray400} />
          <Input placeholder="Senha" secureTextEntry placeholderTextColor={theme.dark.gray400} />
        </View>

        <View>
          <Button stretch>
            {update ? 'Atualizar' : 'Cadastrar'}
          </Button>
        </View>
      </Container>
      <Footer 
        goBack={handleGoBack}
        goHome={handleGoHome}
        goSettings={handleGoSettings}
      />
    </>
  )
}