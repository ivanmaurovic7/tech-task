import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {List, ListItem, ListItemText} from '@material-ui/core';

const SearchResults = ({
  searchResults,
}) => {

  return (
    <div className="searchResultsContainer" style={searchResults.length === 0 ? { visibility: 'hidden' } : {}}>
      <div className="searchResults">
        <List>
          { searchResults.map((item, index) => 
            <ListItem button key={index} onClick={() => window.open(item.URL)}>
              <ListItemText primary={item.title} />
            </ListItem>) 
          }
        </List >
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
    searchResults: state.searchResults.searchResults,
})

export default connect(mapStateToProps)(SearchResults)