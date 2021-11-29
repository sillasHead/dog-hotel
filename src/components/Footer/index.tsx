import React from 'react'
import { StyledView } from 'global/styles/components'
import Home from 'assets/home.svg'
import HomeDisabled from 'assets/home-disabled.svg'
import Goback from 'assets/goback.svg'
import GobackDisabled from 'assets/goback-disabled.svg'
import Settings from 'assets/settings.svg'
import SettingsDisabled from 'assets/settings-disabled.svg'
import { theme } from 'global/styles/theme'
import { TouchableOpacity } from 'react-native'

type Props = {
  goBackDisabled?: boolean
  goHomeDisabled?: boolean
  goSettingsDisabled?: boolean
  goBack?: () => void
  goHome?: () => void
  goSettings?: () => void
}

export function Footer({ goBackDisabled, goHomeDisabled, goSettingsDisabled, goBack, goSettings, goHome }: Props) {
  return (
    <StyledView
      heigth="50px"
      width="100%"
      flexDirection="row"
      justifyContent="space-around"
      backgroundColor={theme.dark.green}
      alignItems="center"
    >
      {goBackDisabled
        ? <GobackDisabled />
        : <TouchableOpacity onPress={goBack}>
          <Goback />
        </TouchableOpacity>}
      {goHomeDisabled
        ? <HomeDisabled />
        : <TouchableOpacity onPress={goHome}>
          <Home />
        </TouchableOpacity>}
      {goSettingsDisabled
        ? <SettingsDisabled />
        : <TouchableOpacity onPress={goSettings}>
          <Settings />
        </TouchableOpacity>}
    </StyledView>
  )
}