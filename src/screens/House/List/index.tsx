import React, { useState } from 'react'
import { Footer } from '../../../components/Footer'
import { Container, FlatList, Input, View } from '../../../global/styles/components'
import { theme } from '../../../global/styles/theme'
import { Dog } from '../../../global/types/dog'
import { ListItem } from '../ListItem'
import { Selection } from '../Selection'

export function List({ navigation }: any) {

  const [dogs, setDogs] = useState<Dog[]>(apiData)

  function handleGoSettings() {
    navigation.navigate('Settings')
  }

  function handleGoSelection() {
    navigation.navigate(Selection.name)
  }

  return (
    <>
      <Container justifyContent="flex-start">
        <View marginTop="50px" width="100%">
          <View>
            <Input placeholder="Digite sua localização" placeholderTextColor={theme.dark.gray400} />
          </View>
          <FlatList
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            data={dogs}
            numColumns={2}
            renderItem={({ item }: any) => (<ListItem goSelection={handleGoSelection} key={item.id} />)} // TODO ajustar tipagem do item
          />
        </View>
      </Container>
      <Footer
        goSettings={handleGoSettings}
        goHomeDisabled
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

] as Dog[]

