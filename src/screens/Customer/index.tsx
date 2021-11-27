import React from 'react'
import { Button } from '../../components/Button'
import { Container, Input, Title, View } from '../../global/styles/components'
import { theme } from '../../global/styles/theme'

type Props = {
  update?: boolean
}

export function Customer({ update }: Props) {
  return (
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
  )
}