import React from 'react'
import { StarRating } from '../../../components/StarRating'
import { TouchableOpacity, TouchableOpacityOutline, Text, TextButton, TextButtonOutline } from '../../../global/styles/components'
import { Container, ContainerImage, Evaluation, Line, TitleGreen, View } from './styles'

export function Selection() {
  return (
    <Container>
      <ContainerImage>

      </ContainerImage>

      <View>
        <TitleGreen>Nome do Anfitrião</TitleGreen>
        <Text>Sillas Cavalcante</Text>
      </View>

      <Line />

      <Evaluation>
        <StarRating />
        <TouchableOpacityOutline>
          <TextButtonOutline>Avaliar</TextButtonOutline>
        </TouchableOpacityOutline>
      </Evaluation>

      <Line />

      <View>
        <TitleGreen>Contato</TitleGreen>
        <Text>(11) 2536-8596</Text>
        <Text>(11) 99999-6886</Text>
        <Text>sillas@email.com</Text>
      </View>

      <TouchableOpacity>
        <TextButton>Selecionar Casa</TextButton>
      </TouchableOpacity>
    </Container>
  )
}