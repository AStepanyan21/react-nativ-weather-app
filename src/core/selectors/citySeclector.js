class CitySelector{
  
  getErrorMesage(state){
    return state.error.error
  }

  getCityes(state){
    return state.cityes.weather
  }
}

export default CitySelector