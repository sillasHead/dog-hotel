import React from 'react'
import { Button, Container, Input, TextButton, Title, View } from '../../components/styles'
import { theme } from '../../global/styles/theme'

type Props = {
  update?: boolean
}

export function Customer({ update }: Props) {
  return (
    <Container>
      <Title>{update ? 'Atualizar dados' : 'Novo cadastro'}</Title>

      <View>
        <Input placeholder="Nome Completo" placeholderTextColor={theme.dark.gray} />
        <Input placeholder="CPF" placeholderTextColor={theme.dark.gray} />
        <Input placeholder="Login" placeholderTextColor={theme.dark.gray} />
        <Input placeholder="Senha" placeholderTextColor={theme.dark.gray} />
      </View>

      <View>
        <Button>
          <TextButton>{update ? 'Atualizar' : 'Cadastrar'}</TextButton>
        </Button>
      </View>
    </Container>
  )
}