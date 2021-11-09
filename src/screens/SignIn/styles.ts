import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { fonts } from '../../global/styles/fonts'
import { theme } from '../../global/styles/theme'

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.dark.black};
  align-items: center;
  justify-content: center;
`

export const View = styled.View`
  width: 90%;
  margin-top: 50px;
`

export const Input = styled.TextInput`
  color: ${theme.dark.white};
  border-color: ${theme.dark.gray};
  border-width: 1px;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
`

export const Button = styled.TouchableOpacity`
  align-items: center;
  background-color: ${theme.dark.green};
  border-color: transparent;
  color: ${theme.dark.white};
  border-width: 1px;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
`

export const ButtonOutline = styled.TouchableOpacity`
  align-items: center;
  border-color: ${theme.dark.green};
  color: ${theme.dark.black};
  border-width: 1px;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
`

export const TextButton = styled.Text`
  color: ${theme.dark.black};
  font-family: ${fonts.black};
`

export const TextButtonOutline = styled.Text`
  color: ${theme.dark.green};
  font-family: ${fonts.black};
`
