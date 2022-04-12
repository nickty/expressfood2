import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer'
import ClientTabs from './ClientTabs'
import { Icon } from '@rneui/themed'
import { colors } from '../global/styles'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen 
            name='ClientTabs'
            component={ClientTabs}

            options= {{
                title: 'Client',
                drawerIcon: ({focussed, size}) => (
                    <Icon 
                        type='material-community'
                        name='home'
                        color={focussed ? '#7cc' : colors.grey2}
                        size = {size}
                    />
                )
            }}
        />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({})