import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import HomeHeader from '../components/HomeHeader'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../global/styles'

const HomeScreen = () => {

  const [delivery, setDelivery] = useState(true)

  return (
    <View style={styles.container}>
        <HomeHeader />

        <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity
            onPress={()=> {
              setDelivery(true)
            }}
          >
            <View style={{...styles.deliveryButton, backgroundColor: delivery ? colors.buttons : colors.grey5}}>
              <Text style={styles.deliveryText}>Delivery</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=> {
              setDelivery(false)
            }}
          >
            <View style={{...styles.deliveryButton, backgroundColor: delivery ? colors.grey5 : colors.buttons}}>
              <Text style={styles.deliveryText}>Pick Up</Text>
            </View>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, 
       
    },
    deliveryButton: {
      paddingHorizontal: 20, 
      borderRadius: 15,
      paddingVertical: 15
    }, 
    deliveryText: {
      marginLeft: 5, 
      fontSize: 16
    }
})