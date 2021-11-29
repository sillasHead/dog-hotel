import React from 'react'
import { theme } from 'global/styles/theme'
import StarRating from 'react-native-star-rating'
import { StyledText, StyledView } from 'global/styles/components'

export function StarRatingt() {

  const [rating, setRating] = React.useState(0)
 
  function onStarRatingPress(rating: number) {
    setRating(rating)
  }

  return (
    <StyledView>
      <StyledText>Avaliação</StyledText>
      <StarRating
        disabled={false}
        maxStars={5}
        rating={rating}
        selectedStar={onStarRatingPress}
        animation="bounce"
        fullStarColor={theme.dark.yellow}
      />
    </StyledView>
  )
}