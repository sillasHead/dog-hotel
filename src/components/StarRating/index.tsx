import React from 'react'
import { theme } from '../../global/styles/theme'
import { Container, Text } from './styles'
import StarRating from 'react-native-star-rating'

export function StarRatingt() {
  function ratingCompleted(rating: number) {
    console.log("Rating is: " + rating)
  }

  const [rating, setRating] = React.useState(0)
 
  function onStarRatingPress(rating: number) {
    setRating(rating)
  }

  return (
    <Container>
      <Text>Avaliação</Text>
      <StarRating
        disabled={false}
        maxStars={5}
        rating={rating}
        selectedStar={onStarRatingPress}
        animation="bounce"
        fullStarColor={theme.dark.yellow}
      />
    </Container>
  )
}