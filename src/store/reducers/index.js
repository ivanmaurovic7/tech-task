import { combineReducers } from 'redux'
import searchFormReducer from './searchFormReducer'
import searchResultsReducer from './searchResultsReducer'
import sidebarReducer from './sidebarReducer'

export default () => combineReducers({
  searchForm: searchFormReducer,
  searchResults: searchResultsReducer,
  sidebar: sidebarReducer,
})
