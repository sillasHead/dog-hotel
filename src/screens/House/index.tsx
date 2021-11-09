import React from 'react'
import { Button, ButtonOutline, Container, Input, TextButton, TextButtonOutline, Title, View } from '../../components/styles'
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
        <ButtonOutline>
          <TextButtonOutline>
            Carregar foto de casa
          </TextButtonOutline>
        </ButtonOutline>
      </View>

      <View>
        <Button>
          <TextButton>
            {update ? 'Atualizar' : 'Cadastrar'}
          </TextButton>
        </Button>
      </View>
    </Container>
  )
}