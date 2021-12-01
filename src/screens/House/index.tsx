import React, { useContext } from 'react'
import { Button } from 'components/Button'
import { StyledContainer, StyledInput, StyledTitle, StyledView } from 'global/styles/components'
import { ThemeContext } from 'styled-components/native'

type Props = {
  update?: boolean
}

export function House({ update }: Props) {
  const { colors } = useContext(ThemeContext)

  return (
    <StyledContainer>
      <StyledTitle>{update ? 'Atualizar casa' : 'Cadastrar casa'}</StyledTitle>

      <StyledView>
        <StyledInput placeholder="Tipo de estabelecimento" placeholderTextColor={colors.gray400} />
        <StyledInput placeholder="Rua" placeholderTextColor={colors.gray400} />
        <StyledInput placeholder="Número" placeholderTextColor={colors.gray400} />
        <StyledInput placeholder="Complemento" placeholderTextColor={colors.gray400} />
        <StyledInput placeholder="Telefone" placeholderTextColor={colors.gray400} />
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