import {
    FETCH_COMPLETED,
  } from '../actions/types'
  
  const initialState = {
    searchResults: [],
  }
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case FETCH_COMPLETED:
        return {
          ...state,
          searchResults: action.payload,
        }
      default:
        return state
    }
  }
  