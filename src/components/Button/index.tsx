import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import {
  TextButtonContent,
  TextButtonOutline,
  TextButtonText,
  TouchableOpacityContent,
  TouchableOpacityOutline,
  TouchableOpacityText
} from '../../global/styles/components'

interface Props extends TouchableOpacityProps {
  children: React.ReactNode
  type?: 'content' | 'outline' | 'text'
}

export function Button({ children, type = 'content', ...props }: Props) {
  switch (type) {
    case 'content':
      return (
        <TouchableOpacityContent {...props}>
          <TextButtonContent>{children}</TextButtonContent>
        </TouchableOpacityContent>
      )
    case 'outline':
      return (
        <TouchableOpacityOutline {...props}>
          <TextButtonOutline>{children}</TextButtonOutline>
        </TouchableOpacityOutline>
      )
    case 'text':
      return (
        <TouchableOpacityText {...props}>
          <TextButtonText>{children}</TextButtonText>
        </TouchableOpacityText>
      )
  }
}
