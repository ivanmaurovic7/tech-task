import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import './App.sass'

import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <Provider store={store}>
      <SearchForm/>
      <SearchResults/>
      <Sidebar/>
    </Provider>
  )
}

export default App