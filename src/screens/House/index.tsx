import React from 'react'
import { Button } from '../../components/Button'
import { Container, Input, Title, View } from '../../global/styles/components'
import { theme } from '../../global/styles/theme'

type Props = {
  update?: boolean
}

export function House({ update }: Props) {
  return (
    <Container>
      <Title>{update ? 'Atualizar casa' : 'Cadastrar casa'}</Title>

      <View>
        <Input placeholder="Tipo de estabelecimento" placeholderTextColor={theme.dark.gray400} />
        <Input placeholder="Rua" placeholderTextColor={theme.dark.gray400} />
        <Input placeholder="Número" placeholderTextColor={theme.dark.gray400} />
        <Input placeholder="Complemento" placeholderTextColor={theme.dark.gray400} />
        <Input placeholder="Telefone" placeholderTextColor={theme.dark.gray400} />
      </View>

      {/* TODO Adicionar container de imagem da casa */}
      <View>
        <Button type="outline">
            Carregar foto de casa
        </Button>
      </View>

      <View>
        <Button type="content">
            {update ? 'Atualizar' : 'Cadastrar'}
        </Button>
      </View>
    </Container>
  )
}