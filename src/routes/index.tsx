import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { AuthRoutes } from './AuthRoutes'

export function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  )
}