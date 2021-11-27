import React from 'react'
import { Button } from '../../../components/Button'
import { Footer } from '../../../components/Footer'
import { StarRatingt } from '../../../components/StarRating'
import { Container, ContainerImage, Image, Line, Text, Title, View } from '../../../global/styles/components'
import routes from '../../../routes/routes'

type Props = {
  navigation: any
}

export function Selection({ navigation }: Props) {
  function handleGoSettings() {
    navigation.navigate(routes.SETTINGS)
  }
  
  return (
    <>
      <Container justifyContent="flex-start">
        <ContainerImage>
          <Image source={{ uri: 'https://www.teclasap.com.br/wp-content/uploads/2009/09/house-1.jpg' }} style={{ resizeMode: 'contain' }} />
        </ContainerImage>

        <View marginTop="50px">
          <Title color="green">Nome do Anfitrião</Title>
          <Text>Sillas Cavalcante</Text>
        </View>

        <Line />

        <View flexDirection="row" justifyContent="space-between">
          <StarRatingt />
          <Button>Avaliar</Button>
        </View>

        <Line />

        <View>
          <Title color="green">Contato</Title>
          <Text>(11) 2536-8596</Text>
          <Text>(11) 99999-6886</Text>
          <Text>sillas@email.com</Text>
        </View>

        <View marginTop="10px">
          <Button stretch>Selecionar Casa</Button>
        </View>

      </Container>
      <Footer
        goSettings={handleGoSettings}
        goBack={() => navigation.goBack()}
      />
    </>
  )
}