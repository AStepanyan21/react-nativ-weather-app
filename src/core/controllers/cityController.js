import {AppConstants} from '../settings/constants'
import {searchCity, 
        addErrorMessage, 
        clearErrorMessage,
        loading} from '../store/actions/city'

class CityController {
  constructor(sdk){
    this._sdk = sdk
  }

  searchNewCity(payload){
    return async (dispatch)=>{
      try {
        dispatch(loading({loading: true}))
        const city= payload.city
        if (!city) return;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${AppConstants.network.API_KEY}`
        const data = await this._sdk.searchCity(url)
        const newCity = {
          city: data.name , 
          temp: data.main.temp,
        }
        dispatch(searchCity(newCity))
      } catch(e){    
        dispatch(addErrorMessage())
        setTimeout(()=>{
          dispatch(clearErrorMessage())
        },5000)
      } finally{
      dispatch(loading({loading: false}))
      }
    } 
  }
}
export default CityController
