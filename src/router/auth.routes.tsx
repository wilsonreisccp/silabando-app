import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import { Testes } from '../pages/Testes'
import { Nivel1 } from '../pages/Nivel1'

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator headerMode='none' >
      <Screen
        name="Nivel Um"
        component={Nivel1}
      />
    </Navigator>
  )
}