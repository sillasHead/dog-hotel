import { NavigationContext } from '@react-navigation/core'
import {
  StyledContainerImage,
  StyledImage,
  StyledText,
  StyledTouchableOpacity,
  StyledView
} from 'global/styles/components'
import { House } from 'global/types/House'
import React, { useContext } from 'react'

type Props = {
  item: House
}

export function ListItem({ item }: Props) {
  return (
    <StyledView width="100%">
      <StyledContainerImage height="100px" width="150px" marginBottom="5px">
        <StyledImage
          source={{ uri: item.imageUrl }}
          style={{ resizeMode: 'contain' }}
        />
      </StyledContainerImage>
      <StyledText
        style={{
          width: '100%',
          textAlign: 'center'
        }}
      >
        {item.address}
      </StyledText>
    </StyledView>
  )
}