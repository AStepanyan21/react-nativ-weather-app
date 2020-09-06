import React from 'react'
import { StyleSheet, View ,Image } from 'react-native'

export const DefaultPage = () =>{
  return(
    <View style = {styles.default}>
      <Image  source={require('../../../assets/img/Start.jpg')} style={styles.image}/>     
    </View>
  )
}

const styles = StyleSheet.create({
  default:{
    flexDirection: 'column',
    justifyContent: 'center',
    
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.9
  }
  
    
})