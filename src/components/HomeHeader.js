import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, parameters } from '../global/styles'
import { Icon, withBadge } from '@rneui/themed'

const HomeHeader = () => {
    const BadgeIcon = withBadge(0)(Icon)
  return (
    <View style={styles.header}>
      <View style={{alignItems: 'center', justifyContent: 'center', marginLeft: 15}}>
        <Icon 
            name='menu'
            color= {colors.CardBackground}
            size={32}
        />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: colors.CardBackground, fontSize: 25, fontWeight: 'bold'}}>Gloria Jeans Coffees</Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center', marginRight: 15}}>
          <BadgeIcon 
            type="material-community"
            name= 'cart'
            size={35}
            color = {colors.CardBackground}
          />
      </View>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: colors.buttons, 
        height: parameters.headerHight, 
        justifyContent: 'space-between'
    }
})