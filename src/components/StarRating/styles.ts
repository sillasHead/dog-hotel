import styled from 'styled-components/native'
import { fonts } from '../../global/styles/fonts'
import { theme } from '../../global/styles/theme'

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`
export const Text = styled.Text`
  font-size: 20px;
  color: ${theme.dark.white};
  font-family: ${fonts.medium};
`