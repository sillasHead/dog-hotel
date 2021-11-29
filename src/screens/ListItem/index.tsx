import React from 'react'
import {
  StyledContainerImage,
  StyledImage,
  StyledText,
  StyledTouchableOpacity,
  StyledView
} from 'global/styles/components'
import { User } from 'global/types/User'

type Props = {
  item: User
}

export function ListItem({ item }: Props) {
  return (
    <StyledTouchableOpacity onPress={() => null} style={{ width:"45%"}}>
       <StyledView width="100%">
        <StyledContainerImage height="100px" width="150px" marginBottom="5px">
          <StyledImage 
            source={{ uri: 'https://s2.glbimg.com/s2Vf9NNIOux1YO6Ev-x8F7OqEb4=/smart/e.glbimg.com/og/ed/f/original/2018/10/26/gd8_onehaus_c04-piscina_r08.jpg' }} 
            style={{ resizeMode: 'contain' }}
          />
        </StyledContainerImage>
        <StyledText   
          style={{
            width: '100%',
            textAlign: 'center'
          }}
        > 
          Casa do lula S2
        </StyledText> 
      </StyledView>
    </StyledTouchableOpacity>
  )
}