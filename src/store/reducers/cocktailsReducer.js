import {
  GET_COCKTAILS,
} from '../actions/types'
  
const initialState = {
  cocktails: []
}
  
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COCKTAILS:
      return {
        ...state,
        cocktails: action.payload
      }
    default:
      return state
  }
}
  