import styled from 'styled-components/native'
import { fonts } from '../../global/styles/fonts'
import { theme } from '../../global/styles/theme'

export const Line = styled.View`
  width: 60%;
  height: 1px;
  background: ${theme.dark.gray400};
`

export const Button = styled.TouchableOpacity`
  /* width: 100%; */
  padding: 30px 0;
`

export const Switch = styled.Switch`
  
`

export const SwitchView = styled.View`
  flex-direction: row;
  align-items: center;
`

export const TitleRed = styled.Text`
  font-family: ${fonts.black};
  color: ${theme.dark.red};
  font-size: 20px;
`