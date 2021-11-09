import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import SignIn from '../screens/SignIn'

const { Navigator, Screen } = createNativeStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator>
      <Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  )
}