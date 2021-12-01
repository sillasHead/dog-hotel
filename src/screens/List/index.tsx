import { Footer } from 'components/Footer'
import {
  StyledContainer,
  StyledFlatList,
  StyledInput,
  StyledText,
  StyledTouchableOpacity,
  StyledView
} from 'global/styles/components'
import { House } from 'global/types/House'
import React, { ElementType, useEffect, useState, useContext } from 'react'
import { ListRenderItemInfo } from 'react-native'
import { ItemList } from 'screens/ItemList'
import { HouseService } from 'services/houseService'
import { ThemeContext } from 'styled-components/native'

export function List({ navigation }: any) {

  const { colors } = useContext(ThemeContext)
  const [houses, setHouses] = useState<House[]>([])
  const [housesView, setHousesView] = useState<House[]>([])
  const [inputLocation, setInputLocation] = useState<string>('')

  useEffect(() => {
    HouseService.getAll()
      .then(response => {
        setHouses(response.data)
        setHousesView(response.data)
      })
      .catch(error => console.log("error HouseService.getHouses() => ", error))
  }, [])

  useEffect(() => {
    loadHouses()
  }, [inputLocation])

  function handleGoSettings() {
    navigation.navigate('Settings')
  }

  function handleGoToSelection(item: House) {
    navigation.navigate('Selection', {
      house: item
    })
  }

  function loadHouses() {
    if (inputLocation === '') {
      setHousesView(houses)
    } else {
      setHousesView(houses.filter(house => {
        return house.address.toLowerCase().includes(inputLocation.toLowerCase())
      }))
    }
  }

  return (
    <>
      <StyledContainer justifyContent="flex-start">
        <StyledView marginTop="40px">
          <StyledInput
            placeholder="Digite o nome de uma rua"
            placeholderTextColor={colors.gray400}
            onChangeText={setInputLocation}
          />
        </StyledView>
        {housesView.length > 0 ? (
          <StyledFlatList<ElementType>
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            data={housesView}
            numColumns={2}
            renderItem={({ item }: ListRenderItemInfo<House>) => (
              <StyledTouchableOpacity onPress={() => handleGoToSelection(item)} style={{ width: "45%" }}>
                <ItemList item={item} />
              </StyledTouchableOpacity>
            )}
          />
        ) : (
          <StyledText>
            Nenhuma casa encontrada
          </StyledText>
        )}
      </StyledContainer>
      <Footer
        goSettings={handleGoSettings}
        goHomeDisabled
        goBackDisabled
        goBack={() => navigation.goBack()}
      />
    </>
  )
}
