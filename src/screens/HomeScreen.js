import {Dimensions, TouchableOpacity, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import HomeHeader from '../components/HomeHeader'
import { colors } from '../global/styles'
import { Icon } from '@rneui/themed'
import { filterData, restaurantsData } from '../global/Data'
import FoodCard from '../components/FoodCard'

const SCREEN_WIDTH = Dimensions.get('window').width

const HomeScreen = () => {

  const [delivery, setDelivery] = useState(true)
  const [indexCheck, setIndexCheck] = useState(0)

  return (
    <View style={styles.container}>
        <HomeHeader />
        <ScrollView
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator= {true}
        >
          <View>
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
          
          <View style={styles.filterView}>
            <View style={styles.addressView}>
              <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 10}}>
                <Icon 
                  type='material-community'
                  name='map-marker'
                  color={colors.grey1}
                  size= {26}
                />
                <Text style={{marginLeft: 5}}>
                  7/7 middle badda
                </Text>
              </View>
              <View style={styles.timeClock}>
                <Icon 
                  type='material-community'
                  name='clock-time-four'
                  color={colors.grey1}
                  size= {26}
                />
                <Text style={{marginLeft: 5}}>
                  Now
                </Text>
              </View>
            </View>
            <View>
              <Icon 
                    type='material-community'
                    name='tune'
                    color={colors.grey1}
                    size= {26}
                  />
            </View>
          </View>

          <View style={styles.headerTextView}>
            <Text style={styles.headerText}>Categories</Text>
          </View>

          <View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false} 
              data={filterData}
              keyExtractor={(item)=>item.id}
              extraData={indexCheck}
              renderItem={({item, index}) => (
                <Pressable 
                  onPress={() => {
                    setIndexCheck(item.id)
                  }}
                >
                  <View style= {indexCheck === item.id ? {...styles.smallCardSelected} : {...styles.smallCard}}>
                      <Image 
                        style={{height: 60, width: 60, borderRadius: 30}}
                        source = {item.image}

                      />
                      <View>
                        <Text style = {indexCheck === item.id ? {...styles.smallCardSelected} : {...styles.smallCardText}}>
                          {item.name}
                        </Text>
                      </View>
                  </View>
                </Pressable>
              )}
            />
          </View>
          
        </ScrollView>

        <View style={styles.headerTextView}>
            <Text style={styles.headerText}>Free Delivery</Text>
          </View>
       <View>
         <FlatList 
          style={{marginTop: 10, marginBottom: 10}}
          horizontal
          showsHorizontalScrollIndicator = {false}
          data = {restaurantsData}
          keyExtractor = {(item, index) => index.toString()}
          renderItem = {({item}) => (
            <View style={{marginRight: 5}}>
              <FoodCard 
                screenWidth={ SCREEN_WIDTH*0.8}
                images = {item.images}
                restaurantName={item.restaurantsName}
                farAway= {item.farAway}
                businessAddress = {item.businessAddress}
                averageReview = {item.averageReview}
                numberOfReview = {item.numberOfReviews}
              />
            </View>  
          )}
         />
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
    }, 
    filterView: {
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'space-evenly', 
      marginHorizontal: 10, 
      marginVertical: 10
    }, 
    timeClock: {
      backgroundColor: colors.CardBackground, 
      flexDirection: 'row', 
      alignItems: 'center', 
      marginLeft: 20,
      borderRadius: 15,
      paddingHorizontal: 5,
      marginRight: 20
    },
    addressView : {
      flexDirection: 'row', 
      backgroundColor: colors.grey5, 
      borderRadius: 15, 
      paddingHorizontal: 5,
      justifyContent: "space-evenly",
      paddingHorizontal: 20
    }, 
    headerText: {
      color: colors.grey2,
      fontSize: 24,
      fontWeight: 'bold',
      paddingLeft: 10
    }, 
    headerTextView: {
      backgroundColor: colors.grey5,
      paddingVertical: 3
    }, 
    smallCard: {
      borderRadius: 30,
      backgroundColor: colors.grey5,
      justifyContent: 'center',
      alignItems: 'center', 
      padding: 5, 
      width: 80, 
      margin: 10, 
      height: 100
    }, 
    smallCardSelected: {
      borderRadius: 30,
      backgroundColor: colors.buttons,
      justifyContent: 'center',
      alignItems: 'center', 
      padding: 5, 
      width: 80, 
      margin: 10, 
      height: 100
    }, 
    smallCardTextSelected: {
      fontWeight: 'bold',
      color: colors.CardBackground
    },
    smallCardText: {
      fontWeight: 'bold',
      color: colors.grey2
    }
})