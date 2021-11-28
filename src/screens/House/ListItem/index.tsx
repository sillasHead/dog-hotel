import React from 'react'
import { ContainerImage, Image, Text, TouchableOpacity, View } from '../../../global/styles/components'

type Props = {
  goSelection: () => void
}

export function ListItem({ goSelection }: Props) {
  return (
    <TouchableOpacity onPress={goSelection}>
      <View marginTop="50px" width="50%" justifyContent="center" alignItems="center">
        <ContainerImage height="100px" width="150px" marginBottom="5px">
          <Image source={{ uri: 'https://s2.glbimg.com/s2Vf9NNIOux1YO6Ev-x8F7OqEb4=/smart/e.glbimg.com/og/ed/f/original/2018/10/26/gd8_onehaus_c04-piscina_r08.jpg' }} />
        </ContainerImage>
        <Text>
          Rua Almeida, nº 5asdfasdfasdfasdfasdf
        </Text>
      </View>
    </TouchableOpacity>
  )
}