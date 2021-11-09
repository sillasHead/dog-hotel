// sobrescrevendo a tipagem do svg

declare module '*.svg' {
  import React from 'react'
  import { SvgProps } from 'react-native-svg'
  // FC = Function Component do react
  const content: React.FC<SvgProps>
  export default content
}