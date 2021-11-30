import React from 'react'
import { Button } from 'components/Button'
import { StyledContainer, StyledInput, StyledTitle, StyledView } from 'global/styles/components'
import { theme } from 'global/styles/theme'

type Props = {
  update?: boolean
}

export function House({ update }: Props) {
  return (
    <StyledContainer>
      <StyledTitle>{update ? 'Atualizar casa' : 'Cadastrar casa'}</StyledTitle>

      <StyledView>
        <StyledInput placeholder="Tipo de estabelecimento" placeholderTextColor={theme.dark.gray400} />
        <StyledInput placeholder="Rua" placeholderTextColor={theme.dark.gray400} />
        <StyledInput placeholder="Número" placeholderTextColor={theme.dark.gray400} />
        <StyledInput placeholder="Complemento" placeholderTextColor={theme.dark.gray400} />
        <StyledInput placeholder="Telefone" placeholderTextColor={theme.dark.gray400} />
      </StyledView>

      <StyledView>
        <Button type="outline">
            Carregar foto de casa
        </Button>
      </StyledView>

      <StyledView>
        <Button type="content">
            {update ? 'Atualizar' : 'Cadastrar'}
        </Button>
      </StyledView>
    </StyledContainer>
  )
}