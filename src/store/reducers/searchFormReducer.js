  import {
    THROW_ERROR,
    CLEAR_ERROR,
    LOADING,
    NOT_LOADING,
    SET_SEARCH_QUERY,
  } from '../actions/types'
  
  const initialState = {
    error: null,
    loading: false,
    searchQuery: '',
  }
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case SET_SEARCH_QUERY:
        return {
          ...state,
          searchQuery: action.payload,
        }
      case LOADING:
        return {
          ...state,
          loading: true,
        }
      case NOT_LOADING:
        return {
          ...state,
          loading: false,
        }
      case CLEAR_ERROR:
        return {
          ...state,
          error: null,
        }
      case THROW_ERROR:
        return {
          ...state,
          error: action.payload,
        }
      default:
        return state
    }
  }
  