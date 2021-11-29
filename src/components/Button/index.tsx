import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import {
  StyledTextButtonContent,
  StyledTextButtonOutline,
  StyledTextButtonText,
  StyledButtonContent,
  StyledButtonOutline,
  StyledButtonText
} from 'global/styles/components'

interface Props extends TouchableOpacityProps {
  children: React.ReactNode
  stretch?: boolean
  type?: 'content' | 'outline' | 'text'
  textColor?: 'gray400' | 'red' | 'green'
}

export function Button({ children, stretch = false, type = 'content', textColor = 'gray400', ...props }: Props) {
  switch (type) {
    case 'content':
      return (
        <StyledButtonContent {...props} stretch={stretch}>
          <StyledTextButtonContent>{children}</StyledTextButtonContent>
        </StyledButtonContent>
      )
    case 'outline':
      return (
        <StyledButtonOutline {...props} stretch={stretch}>
          <StyledTextButtonOutline>{children}</StyledTextButtonOutline>
        </StyledButtonOutline>
      )
    case 'text':
      return (
        <StyledButtonText {...props} stretch={stretch}>
          <StyledTextButtonText color={textColor}>{children}</StyledTextButtonText>
        </StyledButtonText>
      )
  }
}
