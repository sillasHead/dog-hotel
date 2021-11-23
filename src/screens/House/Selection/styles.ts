import styled from 'styled-components/native'
import { fonts } from '../../../global/styles/fonts'
import { theme } from '../../../global/styles/theme'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${theme.dark.black};
`
export const Evaluation = styled.View` 
  flex-direction: row;
  align-items: center;
` 
export const View = styled.View`
  align-items: center;
` 
export const TitleGreen = styled.Text`
  font-family: ${fonts.medium};
  color: ${theme.dark.green};
  font-size: 16px;
`