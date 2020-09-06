import React from 'react'
import {  View } from 'react-native'
import {Provider} from 'react-redux'
import  StartPage  from './src/containers/StartPage/StartPage' 
import {store} from './src/core/store/index'

class App extends React.Component {
 render(){
    return (
      <Provider store = {store}>
        <View>
          <StartPage/>
        </View>
      </Provider>
    )
  }
}
export default App
