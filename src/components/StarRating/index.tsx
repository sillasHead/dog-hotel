import React from 'react'
import { Rating } from 'react-native-ratings'
import { Container, Text } from './styles'

export function StarRating() {
  function ratingCompleted(rating: number) {
    console.log("Rating is: " + rating)
  }

  return (
    <Container>
      <Text>Avaliação</Text>
      <Rating
        showRating
        onFinishRating={ratingCompleted}
        style={{ paddingVertical: 10 }}
      />
    </Container>
  )
}