import React, { useState } from 'react'
import { Container, Title } from '../../global/styles/components'
import { theme } from '../../global/styles/theme'
// import { theme } from '../../global/styles/theme'
import { Button, Line, TitleRed, Switch, SwitchView } from './styles'

export function Settings() {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  return (
    <Container>
      <Button onPress={toggleSwitch}>
        <SwitchView>
          <Title>
            Tema Escuro
          </Title>
          <Switch
            trackColor={{ false: theme.dark.gray600, true: theme.dark.greenGrayDisabled }}
            thumbColor={isEnabled ? theme.dark.green : theme.dark.gray400}
            ios_backgroundColor={theme.dark.gray600}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </SwitchView>
      </Button>
      <Line />
      <Button>
        <Title>
          Ser Anfitrião
        </Title>
      </Button>
      <Line />
      <Button>
        <Title>
          Alterar Dados
        </Title>
      </Button>
      <Line />
      <Button>
        <TitleRed>
          Sair da Conta
        </TitleRed>
      </Button>
    </Container>
  )
}