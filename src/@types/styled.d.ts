import styled from 'styled-components/native'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string,
    
    colors: {
      white: string,
      black: string,
      gray400: string,
      gray600: string,
      gray800: string,
      green: string,
      greenGray: string,
      greenGrayDisabled: string,
      red: string,
      yellow: string,
    }
  }
}