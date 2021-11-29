import React, { ElementType, useState } from 'react'
import { ListRenderItemInfo } from 'react-native'
import { Footer } from 'components/Footer'
import { StyledContainer, StyledFlatList, StyledInput, StyledView } from 'global/styles/components'
import { theme } from 'global/styles/theme'
import { User } from 'global/types/User'
import { ListItem } from 'screens/ListItem'

export function List({ navigation }: any) {

  const [dogs, setDogs] = useState<User[]>(apiData)

  function handleGoSettings() {
    navigation.navigate('Settings')
  }

  return (
    <>
      <StyledContainer justifyContent="flex-start">
        <StyledView marginTop="40px">
          <StyledInput placeholder="Digite sua localização" placeholderTextColor={theme.dark.gray400} />
        </StyledView>
        <StyledFlatList<ElementType>
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          data={dogs}
          numColumns={2}
          renderItem={({ item }: ListRenderItemInfo<User>) => <ListItem item={item} />}
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

const apiData = [
  { id: 1, name: 'Cachorro', },
  { id: 2, name: 'Gato', },
  { id: 3, name: 'Cachorro', },
  { id: 4, name: 'Gato', },
  { id: 5, name: 'Cachorro', },
  { id: 6, name: 'Gato', },
  { id: 7, name: 'Cachorro', },
  { id: 8, name: 'Gato', },
  { id: 9, name: 'Cachorro', },
  { id: 10, name: 'Gato', },
  { id: 11, name: 'Cachorro', },
  { id: 12, name: 'Gato', },
  { id: 13, name: 'Cachorro', },
  { id: 14, name: 'Gato', },
  { id: 15, name: 'Cachorro', },
  { id: 16, name: 'Gato', },
  { id: 17, name: 'Cachorro', },
  { id: 18, name: 'Gato', },
  { id: 19, name: 'Cachorro', },
  { id: 20, name: 'Gato', },
  { id: 21, name: 'Cachorro', },
  { id: 22, name: 'Gato', },
  { id: 23, name: 'Cachorro', },
  { id: 24, name: 'Gato', },
  { id: 25, name: 'Cachorro', },
  { id: 26, name: 'Gato', },
  { id: 27, name: 'Cachorro', },
  { id: 28, name: 'Gato', },
  { id: 29, name: 'Cachorro', },
  { id: 30, name: 'Gato', },
  { id: 31, name: 'Cachorro', },
  { id: 32, name: 'Gato', },
  { id: 33, name: 'Cachorro', },
  { id: 34, name: 'Gato', },
  { id: 35, name: 'Cachorro', },
  { id: 36, name: 'Gato', },

] as User[]

