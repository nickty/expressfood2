import { FlatList, Keyboard, Modal, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { colors } from '../global/styles'
import { Icon } from '@rneui/themed'
import * as Animatable from 'react-native-animatable'
import { filterData } from '../global/Data'
import { useNavigation } from '@react-navigation/native'

const SearchComponent = () => {
    const navigation = useNavigation()
    const [data, setData] = useState([...filterData])
    const [modalVisible, setModalVisible] = useState(false)
    const [textInputFocussed, setTextInputFocussed] = useState(true)

    const textInput = useRef(0)
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableWithoutFeedback
        onPress={() => {
            setModalVisible(true)
        }}
      >
          <View style = {styles.searchArea}>
              <Icon 
                name='search'
                style={styles.searchIcon}
                type="material"
                iconStyle={{marginLeft:5}}
                size = {32}
              />
              <Text style={{fontSize:15}}>What are you looking for?</Text>
          </View>
      </TouchableWithoutFeedback>
      <Modal
        animationType='fade'
        transparent={false}
        visible= {modalVisible}
      >
          <View style={styles.Modal}>
              
            <View style = {styles.view1}>
                <View style={styles.TextInput}>
                    <Animatable.View
                        animation={textInputFocussed ? "fadeInLeft" : ""}
                        duration= {400}
                    >
                        <Icon 
                            name={textInputFocussed ? "arrow-back" : "search"}
                            onPress={() => {
                                if(textInputFocussed)
                                setModalVisible(false)
                                setTextInputFocussed(true)
                            }} 
                            style ={styles.icon2}
                            type="material"
                            iconStyle={{marginRight: 5}}
                        />
                    </Animatable.View>
                    <TextInput 
                        style={{width: "90%"}}
                        placeholder= "Searc"
                        autoFocus= {false}
                        ref = {textInput} 
                        onFocus = {() => {
                            setTextInputFocussed(true)
                        }}
                        onBlur = { () => {
                            setTextInputFocussed(false)
                        }}                   
                    />
                    <Animatable.View>
                        <Icon 
                            name={textInputFocussed ? "cancel" : null}
                            onPress={() => {
                                textInput.current.clear()
                                // handleSearch()
                            }} 
                            style ={styles.icon2}
                            type="material"
                            iconStyle={{color: colors.grey3}}
                        />
                    </Animatable.View>
                </View>
            </View>

            <FlatList
                data={data}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress = {() => {
                            Keyboard.dismiss
                            navigation.navigate("RestaurantSearchScreen", {item: item.name})
                            setModalVisible(false)
                            setTextInputFocussed(true)
                        }}>
                            <View style={styles.view2}>
                                <Text style={{color:colors.grey2, fontSize: 15}}>
                                    {item.name}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    
                )}
            >

            </FlatList>
          </View>
      </Modal>
    </View>
  )
}

export default SearchComponent

const styles = StyleSheet.create({
    container : {
        flex: 1
    }, 
    text1: {
        color: colors.grey3,
        fontSize: 16
    }, 
    TextInput: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 0,
        borderColor: "#86939e",
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center', 
        alignItems: 'center',
        paddingLeft: 10, 
        paddingRight: 10
    }, 
    searchArea: {
        marginTop: 10, 
        width: "94%", 
        height: 50,
        backgroundColor: colors.grey5,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.grey4,
        flexDirection: 'row', 
        alignItems: 'center'
    }, 
    searchIcon: {
        fontSize: 24,
        padding: 5, 
        color: colors.grey2
    }, 
    view1: {
        height: 70,
        justifyContent: 'center', 
        paddingHorizontal: 10
    },
    view2: {
        flexDirection: 
        'row',
        padding: 15, 
        alignItems: 'center'
    },
    icon2: {
        fontSize: 24,
        padding: 5,
        color: colors.grey2
    }, 
    modal : {
        flex: 1
    }
    
})