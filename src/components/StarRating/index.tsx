import { StyledText, StyledView } from 'global/styles/components'
import React from 'react'
import StarRating from 'react-native-star-rating-widget'

export function StarRatingt() {

  const [rating, setRating] = React.useState(0)

  return (
    <StyledView width="50%" justifyContent="center" alignItems="center">
      <StarRating
        rating={rating}
        onChange={setRating}
      />
    </StyledView>
  )
}