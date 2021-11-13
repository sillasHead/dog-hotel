import React from 'react'
import { TextButton, TextButtonOutline, TouchableOpacity, TouchableOpacityOutline } from '../../global/styles/components'

type Props = {
  children: React.ReactNode
}

export function Button({ children }: Props) {
  return (
    <TouchableOpacity>
      <TextButton>{children}</TextButton>
    </TouchableOpacity>
  )
}

export function ButtonOutline({ children }: Props) {
  return (
    <TouchableOpacityOutline>
      <TextButtonOutline>{children}</TextButtonOutline>
    </TouchableOpacityOutline>
  )
}

export function ButtonText({ children }: Props) {
  return (
    <TouchableOpacity>
      <TextButton>{children}</TextButton>
    </TouchableOpacity>
  )
}