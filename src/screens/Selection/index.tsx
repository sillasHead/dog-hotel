import React from 'react'
import { Button } from 'components/Button'
import { Footer } from 'components/Footer'
import { StarRatingt } from 'components/StarRating'
import {
  StyledContainer,
  StyledContainerImage,
  StyledImage,
  StyledLine,
  StyledText,
  StyledTitle,
  StyledView
} from 'global/styles/components'

type Props = {
  navigation: any
}

export function Selection({ navigation }: Props) {
  // const [modalVisible, setModalVisible] = useState(false)

  // function handleModal() {
  //   setModalVisible(x => !x)
  // }

  function handleGoSettings() {
    navigation.navigate('Settings')
  }

  function handleGoHome() {
    navigation.navigate('List')
  }

  return (
    <>
      <StyledContainer justifyContent="flex-start">
        <StyledContainerImage>
          <StyledImage source={{ uri: 'https://www.teclasap.com.br/wp-content/uploads/2009/09/house-1.jpg' }} style={{ resizeMode: 'contain' }} />
        </StyledContainerImage>

        <StyledView marginTop="50px">
          <StyledTitle color="green">Nome do Anfitrião</StyledTitle>
          <StyledText>Sillas Cavalcante</StyledText>
        </StyledView>

        <StyledLine />

        <StyledView flexDirection="row" justifyContent="space-between">
          <StarRatingt />
          <Button /* onPress={handleModal} */>Avaliar</Button>
        </StyledView>

        <StyledLine />

        <StyledView>
          <StyledTitle color="green">Contato</StyledTitle>
          <StyledText>(11) 2536-8596</StyledText>
          <StyledText>(11) 99999-6886</StyledText>
          <StyledText>sillas@email.com</StyledText>
        </StyledView>

        <StyledView marginTop="10px">
          <Button stretch>Selecionar Casa</Button>
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