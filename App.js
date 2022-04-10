import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { colors } from './src/global/styles'
import SignInWelcomScreen from './src/screens/authScreens/SignInWelcomScreen'

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='light-content'
        backgroundColor={colors.statusbar}
      />
      <SignInWelcomScreen />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})