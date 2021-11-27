import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import {
  TextButtonContent,
  TextButtonOutline,
  TextButtonText,
  ButtonContent,
  ButtonOutline,
  ButtonText
} from '../../global/styles/components'

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
        <ButtonContent {...props} stretch={stretch}>
          <TextButtonContent>{children}</TextButtonContent>
        </ButtonContent>
      )
    case 'outline':
      return (
        <ButtonOutline {...props} stretch={stretch}>
          <TextButtonOutline>{children}</TextButtonOutline>
        </ButtonOutline>
      )
    case 'text':
      return (
        <ButtonText {...props} stretch={stretch}>
          <TextButtonText color={textColor}>{children}</TextButtonText>
        </ButtonText>
      )
  }
}
