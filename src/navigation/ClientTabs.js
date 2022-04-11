import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import { Icon } from '@rneui/themed'
import { colors } from '../global/styles'
import SearchScreen from '../screens/SearchScreen'
import MyAccountScreen from '../screens/MyAccountScreen'
import MyOrdersScreen from '../screens/MyOrdersScreen'

const Tabs = createBottomTabNavigator()

const ClientTabs = () => {
  return (
    <Tabs.Navigator
        screenOptions={{
            headerShown: false,
            headerTintColor: colors.buttons,
            tabBarActiveBackgroundColor: colors.buttons
        }}
    >
        <Tabs.Screen 
            name = "HomeScreen"
            component={HomeScreen}
            options = {
                {
                    tabBarLabel : "Home",
                    tabBarIcon : ({color, size}) => (
                        <Icon 
                            name = 'home'
                            type='material'
                            color={color}
                            size={size}
                        />
                    )
                }
            }
        />
        <Tabs.Screen 
            name = "SearchScreen"
            component={SearchScreen}
            options = {
                {
                    tabBarLabel : "Search",
                    tabBarIcon : ({color, size}) => (
                        <Icon 
                            name = 'search'
                            type='material'
                            color={color}
                            size={size}
                        />
                    )
                }
            }
        />
        <Tabs.Screen 
            name = "MyAccount"
            component={MyAccountScreen}
            options = {
                {
                    tabBarLabel : "My Account",
                    tabBarIcon : ({color, size}) => (
                        <Icon 
                            name = 'person'
                            type='material'
                            color={color}
                            size={size}
                        />
                    )
                }
            }
        />
        <Tabs.Screen 
            name = "MyOrderScreen"
            component={MyOrdersScreen}
            options = {
                {
                    tabBarLabel : "My Orders",
                    tabBarIcon : ({color, size}) => (
                        <Icon 
                            name = 'view-list'
                            type='material'
                            color={color}
                            size={size}
                        />
                    )
                }
            }
        />
    </Tabs.Navigator>
  )
}

export default ClientTabs

const styles = StyleSheet.create({})