import React from 'react'
import { Text, View, StyleSheet } from 'react-native'


export const WeatherBoard = ({ temp ,name}) =>{
  return(
    <View style = {styles.default}>
      { temp === ''
        ? <Text style = {styles.weather}>
            { temp }
          </Text>
        : <Text style = {styles.weather}>
            { temp } C
          </Text>}
      <Text style = {styles.city}>
        { name }
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  default:{
    justifyContent: 'center',
    alignItems: 'center', 
    marginTop: 150,
    
  },
  weather:{
    fontSize: 64,
    color:'#FFFFFF'
  },
  city:{
    fontSize: 36,
    color:'#FFFFFF'
  }
})