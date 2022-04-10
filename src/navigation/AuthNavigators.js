import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import SignInWelcomScreen from '../screens/authScreens/SignInWelcomScreen'
import SignInScreen from '../screens/authScreens/SignInScreen'
import HomeScreen from '../screens/HomeScreen'

const Auth = createStackNavigator()

const AuthNavigators = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen 
        name='SignInWelcomeScreen'
        component={SignInWelcomScreen}
        options= {{
            headerShown: false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
      />
      <Auth.Screen 
        name='SignInScreen'
        component={SignInScreen}
        options= {{
            headerShown: false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
      />

      <Auth.Screen 
        name='HomeScreen'
        component={HomeScreen}
        options= {{
            headerShown: false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
      />
    </Auth.Navigator>
  )
}

export default AuthNavigators

const styles = StyleSheet.create({})