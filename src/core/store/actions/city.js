import {
    SEARCH_CITY, 
    ADD_ERROR_MESSAGE, 
    CLEAR_ERROR_MESSAGE, 
    LOADING} from './actionTypes'


export function loading(payload){
  return{
    type: LOADING,
    payload
  }
}

export function searchCity(payload){
  return {
    type: SEARCH_CITY,
    payload
  }
}

export function addErrorMessage(){
  return{
    type:ADD_ERROR_MESSAGE,
  }
}

export function clearErrorMessage(){
  return{
    type:CLEAR_ERROR_MESSAGE,
  }
}