import { Button } from 'components/Button'
import { Footer } from 'components/Footer'
import { useUser } from 'context/User'
import {
  StyledContainer,
  StyledContainerImage,
  StyledImage,
  StyledLine,
  StyledText,
  StyledTitle,
  StyledView
} from 'global/styles/components'
import { House } from 'global/types/House'
import React, { useState } from 'react'
import { Alert } from 'react-native'
import StarRating from 'react-native-star-rating-widget'
import { HouseService } from 'services/houseService'

type Props = {
  navigation: any
  route: any
}

export function Selection({ navigation, route }: Props) {
  const house: House = route.params.house
  const { user } = useUser()
  const [rating, setRating] = useState(0)

  function handleGoSettings() {
    navigation.navigate('Settings')
  }

  function handleGoHome() {
    navigation.navigate('List')
  }

  function handleToAssess() {
    HouseService.get(house.id)
      .then(response => {
        const house = response.data as House
        user?.id && house.ratings.push({
          userId: user.id,
          rating: rating
        })
        HouseService.put(house)
          .then(() => {
            Alert.alert('Avaliação realizada com sucesso!')
          })
          .catch(error => {
            console.log('error HouseService.put(house) => ', error)
          })
      })
      .catch(error => {
        console.log('error HouseService.get(house.id) => ', error)
      })
  }

  function handleToSelect () {
    Alert.alert('O anfitrião entrará em contato com você em breve! :)')
  }

  return (
    <>
      <StyledContainer justifyContent="flex-start">
        <StyledContainerImage>
          <StyledImage
            source={{ uri: 'https://www.teclasap.com.br/wp-content/uploads/2009/09/house-1.jpg' }}
            style={{ resizeMode: 'contain' }}
          />
        </StyledContainerImage>

        <StyledView marginTop="30px">
          <StyledTitle color="green">Nome do Anfitrião</StyledTitle>
          <StyledText>{house.owner.name}</StyledText>
        </StyledView>

        <StyledView marginTop="30px">
          <StyledTitle color="green">Contato</StyledTitle>
          <StyledText>{house.owner.phone}</StyledText>
          <StyledText>{house.owner.email}</StyledText>
        </StyledView>

        <StyledLine />

        <StyledView flexDirection="row" justifyContent="space-between">
          <StyledView width="auto" style={{ paddingLeft: 0, paddingRight: 0 }}>
            <StarRating
              rating={rating}
              onChange={setRating}
            />
          </StyledView>
          <Button onPress={handleToAssess}>Avaliar</Button>
        </StyledView>

        <StyledLine />

        <StyledView marginTop="10px">
          <Button stretch onPress={handleToSelect}>Selecionar Casa</Button>
        </StyledView>

      </StyledContainer>
      <Footer
        goSettings={handleGoSettings}
        goHome={handleGoHome}
        goBack={() => navigation.goBack()}
      />
    </>
  )
}