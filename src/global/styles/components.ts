import styled from 'styled-components/native'
import { fonts } from './fonts'
import { theme } from './theme'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.dark.black};
`
export const View = styled.View`
  width: 90%;
  margin-top: 50px;
`
export const Text = styled.Text`
  color: ${theme.dark.white};
`
export const Title = styled.Text`
  font-family: ${fonts.black};
  color: ${theme.dark.gray400};
  font-size: 20px;
`
export const Input = styled.TextInput`
  color: ${theme.dark.white};
  border-color: ${theme.dark.gray400};
  border-width: 1px;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
`
export const TouchableOpacity = styled.TouchableOpacity`
  align-items: center;
  background-color: ${theme.dark.green};
  border-color: transparent;   
  color: ${theme.dark.white};
  border-width: 1px;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
`
export const TouchableOpacityOutline = styled.TouchableOpacity`
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
