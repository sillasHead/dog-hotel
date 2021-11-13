import styled from 'styled-components/native'
import { fonts } from '../../../global/styles/fonts'
import { theme } from '../../../global/styles/theme'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${theme.dark.black};
`
export const ContainerImage = styled.View`
  width: 100%;
  height: 400px;
  background: white;
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
export const Line = styled.View`
  width: 80%;
  height: 1px;
  background: ${theme.dark.gray400};
`