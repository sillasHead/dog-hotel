import styled from 'styled-components/native'
import { fonts } from './fonts'

interface IContainer {
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around'
}
interface IView {
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch'
  flexDirection?: 'row' | 'column'
  heigth?: string
  width?: string
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around'
  marginTop?: string
  backgroundColor?: string
}
interface ITitle {
  color?: 'gray400' | 'red' | 'green'
}
interface IText {
  color?: 'gray400' | 'red' | 'green'
}
interface IButton {
  stretch?: boolean
}
interface IContainerImage {
  width?: string
  height?: string
  marginBottom?: string
}

export const StyledContainer = styled.View<IContainer>`
  flex: 1;
  align-items: center;
  justify-content: ${props => props.justifyContent || 'center'};
  background-color: ${props => props.theme.colors.gray800};
`
export const StyledView = styled.View<IView>`
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'center'};
  flex-direction: ${props => props.flexDirection || 'column'};
  height: ${props => props.heigth || 'auto'};
  width: ${props => props.width || '100%'};
  padding: 0 20px;
  margin-top: ${props => props.marginTop || '0px'};
  background-color: ${props => props.backgroundColor || 'transparent'};
`
export const StyledText = styled.Text`
  color: ${props => props.theme.colors.white};
`
export const StyledTitle = styled.Text<ITitle>`
  font-family: ${fonts.black};
  color: ${props => props.theme.colors[props.color || 'gray400']};
  font-size: 20px;
`
export const StyledInput = styled.TextInput`
  width: 100%;
  color: ${props => props.theme.colors.white};
  border-color: ${props => props.theme.colors.gray400};
  border-width: 1px;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
`
export const StyledTouchableOpacity = styled.TouchableOpacity`
  margin-bottom: 20px;
`
export const StyledButtonContent = styled.TouchableOpacity<IButton>`
  width: ${props => props.stretch ? '100%' : 'auto'};
  align-items: center;
  background-color: ${props => props.theme.colors.green};
  border-color: transparent;   
  border-width: 1px;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
`
export const StyledButtonOutline = styled.TouchableOpacity<IButton>`
  width: ${props => props.stretch ? '100%' : 'auto'};
  align-items: center;
  border-color: ${props => props.theme.colors.green};
  border-width: 1px;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
`
export const StyledButtonText = styled.TouchableOpacity<IButton>`
  width: ${props => props.stretch ? '100%' : 'auto'};
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
`
export const StyledTextButtonContent = styled.Text`
  color: ${props => props.theme.colors.gray800};
  font-family: ${fonts.black};
`
export const StyledTextButtonOutline = styled.Text`
  color: ${props => props.theme.colors.green};
  font-family: ${fonts.black};
`
export const StyledTextButtonText = styled.Text<IText>`
  font-family: ${fonts.black};
  color: ${props => props.theme.colors[props.color || 'gray400']};
  font-size: 20px;
`
export const StyledLine = styled.View`
  width: 90%;
  height: 1px;
  margin: 20px;
  background: ${props => props.theme.colors.gray400};
`
export const StyledContainerImage = styled.View<IContainerImage>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '300px'};
  background: ${props => props.theme.colors.black};
  margin-bottom: ${props => props.marginBottom || '0px'};
`
export const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
`
export const StyledSwitch = styled.Switch`
  
`
export const StyledModal = styled.Modal`
  width: 60%;
  height: 30%;
  background-color: red;
  position: absolute;
`
export const StyledFlatList = styled.FlatList`
  width: 100%;
  padding: 10px 20px 0;
`