import { HTMLAttributes, Touch } from 'hoist-non-react-statics/node_modules/@types/react'
import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
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

export function Button({ children, type = 'content' }: Props) {
  switch (type) {
    case 'content':
      return (
        <TouchableOpacityContent>
          <TextButtonContent>{children}</TextButtonContent>
        </TouchableOpacityContent>
      )
    case 'outline':
      return (
        <TouchableOpacityOutline>
          <TextButtonOutline>{children}</TextButtonOutline>
        </TouchableOpacityOutline>
      )
    case 'text':
      return (
        <TouchableOpacityText>
          <TextButtonText>{children}</TextButtonText>
        </TouchableOpacityText>
      )
  }
}
