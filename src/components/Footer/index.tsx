import React from 'react'
import { View } from '../../global/styles/components'
import Home from '../../assets/home.svg'
import Goback from '../../assets/goback.svg'
import GobackDisabled from '../../assets/goback-disabled.svg'
import Settings from '../../assets/settings.svg'
import SettingsDisabled from '../../assets/settings-disabled.svg'
import { theme } from '../../global/styles/theme'
import { TouchableOpacity } from 'react-native'

type Props = {
  goBackDisabled?: boolean
  goSettingsDisabled?: boolean
  goBack?: () => void
  goHome?: () => void
  goSettings?: () => void
}

export function Footer({ goBackDisabled, goSettingsDisabled, goBack, goSettings, goHome }: Props) {
  return (
    <View
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
      <TouchableOpacity onPress={goHome}>
        <Home />
      </TouchableOpacity>
      {goSettingsDisabled
        ? <SettingsDisabled />
        : <TouchableOpacity onPress={goSettings}>
          <Settings />
        </TouchableOpacity>}
    </View>
  )
}