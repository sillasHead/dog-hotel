import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Customer } from '../screens/Customer'
import { House } from '../screens/House'
import { Settings } from '../screens/Settings'
import SignIn from '../screens/SignIn'

const { Navigator, Screen } = createNativeStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator>
      {/* <Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      /> */}
      {/* <Screen
        name="Customer"
        component={Customer}
        options={{
          headerShown: false,
        }}
      /> */}
      {/* <Screen
        name="House"
        component={House}
        options={{
          headerShown: false,
        }}
      /> */}
      <Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  )
}