import React from 'react'
import {connect} from 'react-redux'
import selectorManager from '../../core/managers/selectorManager'
import {cityController} from '../../core/managers/controllerManager'
import { StyleSheet, TextInput, View ,Button, Alert} from 'react-native'
import { WeatherBoard } from '../../components/WeatherBoard/WeatherBoard'
import { WeatherType } from '../../components/WeatherType/WeatherType'


class StartPage extends React.Component{
  state = {
    name:''
  }
  onChangeText(text){
    this.setState({name:text})
  }
  searchWeather = () =>{
    this.props.searchCity({city:this.state.name})
    this.setState({name:''})
  }
  render(){
    return(
      <View style = {styles.default}>
        {this.props.errorMesage
        ? Alert.alert(
          "Error message",
          "Something went wrong")
        : null}
        <WeatherType  temp ={this.props.weather.temp}/>  
        <WeatherBoard  
          name = {this.props.weather.city}
          temp = {this.props.weather.temp}
          />
        <TextInput
          style = { styles.input }
          onChangeText = { text => this.onChangeText(text) }
          placeholder = 'Input City name'
          value = { this.state.name }
        />
        <View style = {styles.button}>
          <Button 
            title="Find out the weather"
            color="#3E3BEE"
            onPress = { this.searchWeather }
          /> 
        </View> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  default:{
    flexDirection: 'column',
    justifyContent: 'center',
    
  },
  input:{
    marginTop: 150,
    width: '85%',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomColor: '#3847ab',
    borderTopColor: '#3847ab',
    borderLeftColor: '#3847ab',
    borderRightColor: '#3847ab',
    borderRadius:7,
    padding: 10,
    marginLeft:'7.5%',
    marginBottom:35,
    backgroundColor:'#fff',
    opacity:0.7
  },
  button:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom:65
  },
  weatherBoard:{
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:'50%'
  } 
})

function mapStateToProps(state){
  return{
    errorMesage: selectorManager.citySelector.getErrorMesage(state),
    weather: selectorManager.citySelector.getCityes(state),
  }
}

function mapDispatchToProps(dispatch){
  return{
    searchCity: (payload)=>dispatch(cityController.searchNewCity(payload))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(StartPage)