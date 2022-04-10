import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { colors, titleHead } from '../../global/styles'

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      
      <Header title="My Account" type="arrow-left" />
      <View>
          <Text style={titleHead}>Sign-In</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
          <Text style={styles.text1}>
              Please enter the email and password
          </Text>
          <Text style={styles.text1}>
              Register with your account
          </Text>
      </View>
      <View style={{marginTop: 20}}>
          <View>
              <TextInput 
                style={styles.TextInput1}
                placeholder="Email"
              />
          </View>
          <View>
              <TextInput 
                style={styles.TextInput2}
                placeholder="Password"
              />
          </View>
      </View>
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text1: {
        color: colors.grey3
    }, 
    TextInput1: {
        borderWidth: 1,
        borderColor: "#86939e", 
        marginHorizontal:20,
        borderRadius:12,
        marginBottom:20,
        paddingLeft:16
    }, 
    TextInput2: {
        borderWidth: 1,
        borderRadius:12,
        marginHorizontal:20,
        borderColor:'#86939e',
        flexDirection:"row",
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: 16
    }, 
})