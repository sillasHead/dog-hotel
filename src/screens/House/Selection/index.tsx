import React from 'react'
import { Button } from '../../../components/Button'
import { StarRating } from '../../../components/StarRating'
import { Container, ContainerImage, Line, Text, Title, View } from '../../../global/styles/components'
import { Evaluation } from './styles'

export function Selection() {
  return (
    <Container>
      <ContainerImage>

      </ContainerImage>

      <View>
        <Title color="green">Nome do Anfitrião</Title>
        <Text>Sillas Cavalcante</Text>
      </View>

      <Line />  

      <Evaluation>
        <StarRating />
        <Button>Avaliar</Button>
      </Evaluation>

      <Line />

      <View>
        <Title color="green">Contato</Title>
        <Text>(11) 2536-8596</Text>
        <Text>(11) 99999-6886</Text>
        <Text>sillas@email.com</Text>
      </View>

      <Button>Selecionar Casa</Button>
    </Container>
  )
}