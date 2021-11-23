import styled from 'styled-components/native'
import { fonts } from './fonts'
import { theme } from './theme'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.dark.black};
`

interface IView {
  flexDirection?: 'row' | 'column'
  width?: string | number
}
export const View = styled.View<IView>`
  align-items: center;
  flex-direction: ${props => props.flexDirection || 'column'};
  width: ${props => props.width || '90%'};
  margin-top: 50px;
`
export const Text = styled.Text`
  color: ${theme.dark.white};
`

interface ITitle {
  color?: 'gray400' | 'red' | 'green'
}
export const Title = styled.Text<ITitle>`
  font-family: ${fonts.black};
  color: ${props => theme.dark[props.color || 'gray400']};
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
export const TouchableOpacityContent = styled.TouchableOpacity`
  align-items: center;
  background-color: ${theme.dark.green};
  border-color: transparent;   
  border-width: 1px;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
`
export const TouchableOpacityOutline = styled.TouchableOpacity`
  align-items: center;
  border-color: ${theme.dark.green};
  border-width: 1px;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
`
export const TouchableOpacityText = styled.TouchableOpacity`
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
`
export const TextButtonContent = styled.Text`
  color: ${theme.dark.black};
  font-family: ${fonts.black};
`
export const TextButtonOutline = styled.Text`
  color: ${theme.dark.green};
  font-family: ${fonts.black};
`
export const TextButtonText = styled.Text`
  font-family: ${fonts.black};
  color: ${theme.dark.gray400};
  font-size: 20px;
`
export const Line = styled.View`
  width: 80%;
  height: 1px;
  background: ${theme.dark.gray400};
`
export const ContainerImage = styled.View`
  width: 100%;
  height: 400px;
  background: white;
`