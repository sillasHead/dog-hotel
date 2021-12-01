import React, { useContext } from 'react'
import { StyledView } from 'global/styles/components'
import DarkHomeSvg from 'assets/dark-svg/home.svg'
import DarkHomeDisabledSvg from 'assets/dark-svg/home-disabled.svg'
import DarkGobackSvg from 'assets/dark-svg/goback.svg'
import DarkGobackDisabledSvg from 'assets/dark-svg/goback-disabled.svg'
import DarkSettingsSvg from 'assets/dark-svg/settings.svg'
import DarkSettingsDisabledSvg from 'assets/dark-svg/settings-disabled.svg'
import LightHomeSvg from 'assets/light-svg/home.svg'
import LightHomeDisabledSvg from 'assets/light-svg/home-disabled.svg'
import LightGobackSvg from 'assets/light-svg/goback.svg'
import LightGobackDisabledSvg from 'assets/light-svg/goback-disabled.svg'
import LightSettingsSvg from 'assets/light-svg/settings.svg'
import LightSettingsDisabledSvg from 'assets/light-svg/settings-disabled.svg'
import { TouchableOpacity } from 'react-native'
import { ThemeContext } from 'styled-components/native'

type Props = {
  goBackDisabled?: boolean
  goHomeDisabled?: boolean
  goSettingsDisabled?: boolean
  goBack?: () => void
  goHome?: () => void
  goSettings?: () => void
}

export function Footer({ goBackDisabled, goHomeDisabled, goSettingsDisabled, goBack, goSettings, goHome }: Props) {
  const { name, colors } = useContext(ThemeContext)

  function LightSvg() {
    return (
      <>
        {goBackDisabled
          ? <LightGobackDisabledSvg />
          : <TouchableOpacity onPress={goBack}>
            <LightGobackSvg color="black" />
          </TouchableOpacity>}
        {goHomeDisabled
          ? <LightHomeDisabledSvg />
          : <TouchableOpacity onPress={goHome}>
            <LightHomeSvg />
          </TouchableOpacity>}
        {goSettingsDisabled
          ? <LightSettingsDisabledSvg />
          : <TouchableOpacity onPress={goSettings}>
            <LightSettingsSvg />
          </TouchableOpacity>}
      </>
    )
  }

  function DarkSvg() {
    return (
      <>
        {goBackDisabled
          ? <DarkGobackDisabledSvg />
          : <TouchableOpacity onPress={goBack}>
            <DarkGobackSvg color="black" />
          </TouchableOpacity>}
        {goHomeDisabled
          ? <DarkHomeDisabledSvg />
          : <TouchableOpacity onPress={goHome}>
            <DarkHomeSvg />
          </TouchableOpacity>}
        {goSettingsDisabled
          ? <DarkSettingsDisabledSvg />
          : <TouchableOpacity onPress={goSettings}>
            <DarkSettingsSvg />
          </TouchableOpacity>}
      </>
    )
  }

  return (
    <StyledView
      heigth="50px"
      width="100%"
      flexDirection="row"
      justifyContent="space-around"
      backgroundColor={colors.green}
      alignItems="center"
    >
      {name === 'light' ? <LightSvg /> : <DarkSvg />}
    </StyledView>
  )
}