import { Button } from 'components/Button'
import { Footer } from 'components/Footer'
import { useUser } from 'context/User'
import {
  StyledContainer,
  StyledLine,
  StyledSwitch,
  StyledTextButtonText,
  StyledTouchableOpacity
} from 'global/styles/components'
import dark from 'global/themes/dark'
import light from 'global/themes/light'
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components/native'

type Props = {
  navigation: any
}

export function Settings({ navigation }: Props) {

  const toggleSwitch = () => {
    setTheme(name === 'light' ? dark : light)
  }

  const { setTheme } = useUser()
  const { name, colors } = useContext(ThemeContext)
  const { setUser } = useUser()

  function handleGoHome() {
    navigation.navigate('List')
  }

  function updateData() {
    navigation.navigate('NewUser', {
      update: true
    })
  }

  function logout() {
    setUser(undefined)
    navigation.navigate('SignIn')
  }

  return (
    <>
      <StyledContainer>
        <StyledTouchableOpacity onPress={toggleSwitch}
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <StyledTextButtonText style={{ marginRight: 20 }}>
            Tema Escuro
          </StyledTextButtonText>
          <StyledSwitch
            trackColor={{ false: colors.gray600, true: colors.greenGrayDisabled }}
            thumbColor={name === 'dark' ? colors.green : colors.gray400}
            ios_backgroundColor={colors.gray600}
            onValueChange={toggleSwitch}
            value={name === 'dark'}
          />
        </StyledTouchableOpacity>

        <StyledLine />

        <Button type="text" onPress={updateData}>
          Alterar Dados
        </Button>

        <StyledLine />

        <Button textColor="red" type="text" onPress={logout}>
          Sair da Conta
        </Button>
      </StyledContainer>
      <Footer
        goSettingsDisabled
        goHome={handleGoHome}
        goBack={() => navigation.goBack()}
      />
    </>
  )
}