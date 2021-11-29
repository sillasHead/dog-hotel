import React, { useState } from 'react'
import { Button } from 'components/Button'
import { Footer } from 'components/Footer'
import {
  StyledContainer,
  StyledLine,
  StyledSwitch,
  StyledTitle,
  StyledTouchableOpacity,
  StyledView
} from 'global/styles/components'
import { theme } from 'global/styles/theme'

type Props = {
  navigation: any
}

export function Settings({ navigation }: Props) {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  function handleGoHome() {
    navigation.navigate('List')
  }

  return (
    <>
      <StyledContainer>
        <StyledTouchableOpacity onPress={toggleSwitch}>
          <StyledView flexDirection="row" alignItems="center">
            <StyledTitle>
              Tema Escuro
            </StyledTitle>
            <StyledSwitch
              trackColor={{ false: theme.dark.gray600, true: theme.dark.greenGrayDisabled }}
              thumbColor={isEnabled ? theme.dark.green : theme.dark.gray400}
              ios_backgroundColor={theme.dark.gray600}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </StyledView>
        </StyledTouchableOpacity>

        <StyledLine />

        <Button type="text">
          Ser Anfitrião
        </Button>

        <StyledLine />

        <Button type="text">
          Alterar Dados
        </Button>

        <StyledLine />

        <Button textColor="red" type="text">
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