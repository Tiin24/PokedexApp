import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Acount from '../screens/Acount'

const Stack = createStackNavigator()
export default function AcountNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Acount" component={Acount}/>
    </Stack.Navigator>
  )
}