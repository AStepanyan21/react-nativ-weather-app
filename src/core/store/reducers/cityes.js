import { SEARCH_CITY, LOADING} from '../actions/actionTypes'

const initialStayt = {
  weather:{
    temp:'',
    city:''
  },
  loading:false
}

export default function cityesReduser(state = initialStayt, action){
  switch(action.type){
    case SEARCH_CITY:
      return {
        ...state, weather:{  ...action.payload}
      }
    case LOADING:
      return{
        ...state, 
      }
    default:
      return state
    }
}