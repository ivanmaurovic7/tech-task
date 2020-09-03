import {
    ADD_NEW_QUERY,
  } from '../actions/types'
  
  const initialState = {
    previouslySearchedQueries: localStorage.getItem('savedQueries') ? JSON.parse(localStorage.getItem('savedQueries')) : [],
  }
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case ADD_NEW_QUERY:
        let savedQueries = localStorage.getItem('savedQueries') ? JSON.parse(localStorage.getItem('savedQueries')) : []
        localStorage.setItem('savedQueries', JSON.stringify([action.payload, ...savedQueries]))
        return {
          ...state,
          previouslySearchedQueries: [action.payload, ...state.previouslySearchedQueries],
        }
      default:
        return state
    }
  }
  