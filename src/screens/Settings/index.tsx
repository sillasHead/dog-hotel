import { Button } from 'components/Button'
import { Footer } from 'components/Footer'
import { useUser } from 'context/User'
import {
  StyledContainer,
  StyledLine,
  StyledSwitch, 
  StyledTouchableOpacity
} from 'global/styles/components'
import { theme } from 'global/styles/theme'
import React, { useState } from 'react'

type Props = {
  navigation: any
}

export function Settings({ navigation }: Props) {
  const [isEnabled, setIsEnabled] = useState(true)
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled)
  }

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
            flexDirection: "row"
          }}
        >
          <Button type="text">
            Tema Escuro
          </Button>
          <StyledSwitch
            trackColor={{ false: theme.dark.gray600, true: theme.dark.greenGrayDisabled }}
            thumbColor={isEnabled ? theme.dark.green : theme.dark.gray400}
            ios_backgroundColor={theme.dark.gray600}
            onValueChange={toggleSwitch}
            value={isEnabled}
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