import React from 'react'
import { DefaultPage } from '../DefaultPage/DefaultPage'
import { SnowPage } from '../SnowPage/SnowPage'
import { SunshinePage } from '../SunshinePage/SunshinePage'

export const WeatherType = ({temp}) => {
  if(temp === ''){
    return(
        <DefaultPage/>
    )
  }
  else if( temp > 5){
    return(
        <SunshinePage/>
    )
  }
  else if( temp <= 5){
    return(
        <SnowPage/>
    )
  }
  
}