import axios from 'axios'
import {
    FETCH_COMPLETED,
    THROW_ERROR,
    CLEAR_ERROR,
    LOADING,
    NOT_LOADING,
    ADD_NEW_QUERY,
    SET_SEARCH_QUERY,
} from './types'

export const fetchResults = query => async dispatch => {
  dispatch({
    type: LOADING
  })

  try {
    const searchResults = await axios.get(`http://localhost:5000/?q=${query}`)

    if(searchResults.data.error) throw searchResults.data.error
    
    dispatch({
        type: FETCH_COMPLETED,
        payload: searchResults.data
    })

    dispatch({
        type: ADD_NEW_QUERY,
        payload: query
    })

    dispatch({
      type: SET_SEARCH_QUERY,
      payload: query
    })

  } catch (e) {
      dispatch({
        type: THROW_ERROR,
        payload: e
      })

      dispatch({
        type: FETCH_COMPLETED,
        payload: []
    })

    console.log(e)
  }

  dispatch({
    type: NOT_LOADING
  })
}

export const clearError = () => {
  return {
    type: CLEAR_ERROR
  }
}

export const setSearchQuery = q => {
  return {
    type: SET_SEARCH_QUERY,
    payload: q
  }
}