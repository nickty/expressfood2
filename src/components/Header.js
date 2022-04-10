import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, parameters } from '../global/styles'
import { Icon } from '@rneui/themed';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <View style={{marginLeft:10}}>
          <Icon 
            name='arrow-left'
            color={colors.headerText}
            size={28}
            onPress={() => {}}
          />
          
      </View>
      <View>
              <Text style={styles.headerText}>
                  {title}
              </Text>
          </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: colors.buttons,
        height: parameters.headerHight
    }, 
    headerText: {
        color: colors.headerText,
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 20
    }
})