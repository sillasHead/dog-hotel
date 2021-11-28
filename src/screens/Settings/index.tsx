import React, { useState } from 'react'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Container, Line, Switch, Title, TouchableOpacity, View } from '../../global/styles/components'
import { theme } from '../../global/styles/theme'

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
      <Container>
        <TouchableOpacity onPress={toggleSwitch}>
          <View flexDirection="row" alignItems="center">
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
          </View>
        </TouchableOpacity>

        <Line />

        <Button type="text">
            Ser Anfitrião
        </Button>

        <Line />

        <Button type="text">
            Alterar Dados
        </Button>

        <Line />
        
        <Button textColor="red" type="text">
            Sair da Conta
        </Button>
      </Container>
      <Footer
        goSettingsDisabled       
        goHome={handleGoHome}
        goBack={() => navigation.goBack()}
      />
    </>
  )
}