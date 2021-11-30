import { Footer } from 'components/Footer'
import {
  StyledContainer,
  StyledFlatList,
  StyledInput,
  StyledTouchableOpacity,
  StyledView
} from 'global/styles/components'
import { theme } from 'global/styles/theme'
import { House } from 'global/types/House'
import React, { ElementType, useEffect, useState } from 'react'
import { ListRenderItemInfo } from 'react-native'
import { ListItem } from 'screens/ListItem'
import { HouseService } from 'services/houseService'

export function List({ navigation }: any) {

  const [houses, setHouses] = useState<House[]>([])

  useEffect(() => {
    HouseService.getHouses()
      .then(response => {
        setHouses(response.data)
      })
      .catch(error => console.log("error HouseService.getHouses() => ", error))
  }, [])

  function handleGoSettings() {
    navigation.navigate('Settings')
  }

  function handleGoToSelection() {
    navigation.navigate('Selection')
  }

  return (
    <>
      <StyledContainer justifyContent="flex-start">
        <StyledView marginTop="40px">
          <StyledInput placeholder="Digite sua localização" placeholderTextColor={theme.dark.gray400} />
        </StyledView>
        <StyledFlatList<ElementType>
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          data={houses}
          numColumns={2}
          renderItem={({ item }: ListRenderItemInfo<House>) => (
            <StyledTouchableOpacity onPress={() => handleGoToSelection()} style={{ width: "45%" }}>
              <ListItem item={item} />
            </StyledTouchableOpacity>
          )}
        />
      </StyledContainer>
      <Footer
        goSettings={handleGoSettings}
        goHomeDisabled
        // goBackDisabled TODO
        goBack={() => navigation.goBack()}
      />
    </>
  )
}
