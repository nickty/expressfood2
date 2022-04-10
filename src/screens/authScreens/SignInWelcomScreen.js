import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, parameters } from '../../global/styles'
import Swiper from 'react-native-swiper'
import { Button } from '@rneui/themed'

const SignInWelcomScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex:3, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 20}}>
          <Text style={{fontSize: 26, color: colors.buttons, fontWeight: 'bold'}}>
              Discover Restaurants
          </Text>
          <Text style={{fontSize: 26, color: colors.buttons, fontWeight: 'bold'}}>
              In your area
          </Text>

      </View>

      <View style={{flex: 4, justifyContent: 'center'}}>
        <Swiper autoplay = {true}>
            <View style={styles.slide1}>
                <Image 
                    source={{uri: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg'}}
                    style={{height: '100%', width: '100%'}}
                />
            </View>
            <View style={styles.slide2}>
                <Image 
                    source={{uri: 'https://image.shutterstock.com/image-photo/healthy-food-clean-eating-selection-260nw-722718082.jpg'}}
                    style={{height: '100%', width: '100%'}}
                />
            </View>
            <View style={styles.slide3}>
                <Image 
                    source={{uri: 'https://thumbs.dreamstime.com/b/healthy-food-background-fruits-vegetables-cereal-nuts-superfood-dietary-balanced-vegetarian-eating-products-kitchen-143677456.jpg'}}
                    style={{height: '100%', width: '100%'}}
                />
            </View>
            <View style={styles.slide3}>
                <Image 
                    source={{uri: 'https://c.ndtvimg.com/k03tb2a_healthy-food_625x300_17_August_18.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886'}}
                    style={{height: '100%', width: '100%'}}
                />
            </View>
           
        </Swiper>
      </View>

      <View style={{flex: 4, justifyContent: 'flex-end', marginBottom: 20}}>
      <View style={{margin: 20}}>
          <Button 
            title= "SIGN IN"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
          />
      </View>
      <View style={{marginHorizontal: 20}}>
          <Button 
            title="Create an account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
          />
      </View>
      </View>
    </View>
  )
}

export default SignInWelcomScreen

const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97cae5'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97cae5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97cae5'
    },
    createButton: {
        backgroundColor: "white",
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ff8c52", 
        height: 40, 
        paddingHorizontal: 20
    }, 
    createButtonTitle: {
        color: "#ff8c52", 
        fontSize: 16,
        fontWeight: "bold", 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: -3
    }
})