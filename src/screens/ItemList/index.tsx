import {
  StyledContainerImage,
  StyledImage,
  StyledText, StyledView
} from 'global/styles/components'
import { House } from 'global/types/House'
import React, { useEffect } from 'react'
import { averageRating } from 'utils/functions'

type Props = {
  item: House
}

export function ItemList({ item }: Props) {
  const [ratings, setRatings] = React.useState<number[]>([])

  useEffect(() => {
    const ratings: number[] = []
    item.ratings.forEach(rating => {
      ratings.push(rating.rating)
    })
    setRatings(ratings)
  }, [])
  
  return (
    <StyledView width="100%">
      <StyledContainerImage height="100px" width="150px" marginBottom="5px">
        <StyledImage
          source={{ uri: item.imageUrl }}
          style={{ resizeMode: 'contain', borderRadius: 5 }}
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
      <StyledText
        style={{
          width: '100%',
          textAlign: 'center'
        }}
      >
        {averageRating(ratings)} ⭐
      </StyledText>
    </StyledView>
  )
}