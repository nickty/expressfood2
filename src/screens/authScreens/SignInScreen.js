import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Header from '../../components/Header'
import { colors, parameters, titleHead } from '../../global/styles'
import * as Animatable from 'react-native-animatable'
import { Button, Icon } from '@rneui/themed'

const SignInScreen = () => {

    const [textInput2Foccused, setTextInput2Foccused] = useState(false)

    const textInput1 = useRef(1)
    const textInput2 = useRef(2)
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
                ref={textInput1}
              />
          </View>
          <View style={styles.TextInput2}>
            <Animatable.View animation={textInput2Foccused ? "" : "fadeInRight"} duration={400}>
                <Icon 
                    name='lock'
                    iconStyle={{color: colors.grey3}}
                    type="material"
                />
            </Animatable.View>
            <TextInput 
                style={{width: "80%"}}
                placeholder="Password"
                ref={textInput2}
                onFocus={() => {
                    setTextInput2Foccused(false)
                }}
                onBlur= {() => {
                    setTextInput2Foccused(true)
                }}
            />
            <Animatable.View animation={textInput2Foccused ? "" : "fadeInLeft"} duration={400}>
            <Icon 
                    name='visibility-off'
                    iconStyle={{color: colors.grey3}}
                    type="material"
                    style={{marginRight: 10}}
                />
            </Animatable.View>
          </View>
          
      </View>

      <View style={{margin: 20}}>
          <Button 
            title= "SIGN IN"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
          />
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