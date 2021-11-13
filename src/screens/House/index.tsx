import React from 'react'
import { TouchableOpacity, TouchableOpacityOutline, Container, Input, TextButton, TextButtonOutline, Title, View } from '../../global/styles/components'
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
        <TouchableOpacityOutline>
          <TextButtonOutline>
            Carregar foto de casa
          </TextButtonOutline>
        </TouchableOpacityOutline>
      </View>

      <View>
        <TouchableOpacity>
          <TextButton>
            {update ? 'Atualizar' : 'Cadastrar'}
          </TextButton>
        </TouchableOpacity>
      </View>
    </Container>
  )
}