import React from 'react'
import {
  StyledContainerImage,
  StyledImage,
  StyledText,
  StyledTouchableOpacity,
  StyledView
} from 'global/styles/components'
import { Dog } from 'global/types/dog'

type Props = {
  item: Dog
}

export function ListItem({ item }: Props) {
  return (
    <StyledTouchableOpacity onPress={() => null} style={{ borderWidth:1, borderColor:"red", width:"45%"}}>
       <StyledView style={{ borderWidth:1, borderColor:"white"}} width="100%">
        {/*<StyledContainerImage height="100px" width="150px" marginBottom="5px">
          <StyledImage source={{ uri: 'https://s2.glbimg.com/s2Vf9NNIOux1YO6Ev-x8F7OqEb4=/smart/e.glbimg.com/og/ed/f/original/2018/10/26/gd8_onehaus_c04-piscina_r08.jpg' }} />
        </StyledContainerImage> */}
        <StyledText > 
          Rua Almeida,
        </StyledText> 
      </StyledView>
    </StyledTouchableOpacity>
  )
}