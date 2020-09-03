import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchResults } from '../store/actions/searchFormActions'
import {List, ListItem, ListItemText} from '@material-ui/core'
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';

const Sidebar = ({
  fetchResults,
  previouslySearchedQueries,
}) => {

  return (
    <div className="sidebar">
        <List>
          { previouslySearchedQueries.map((item, index) => 
            <ListItem button key={index} onClick={() => fetchResults(item)}>
              <YoutubeSearchedForIcon style={{marginRight: '5px', color: '#303f9f'}}/>
              <ListItemText primary={item} />
            </ListItem>) 
          }
        </List >
    </div>
  )
}

const mapStateToProps = state => ({
  previouslySearchedQueries: state.sidebar.previouslySearchedQueries,
})

const mapActionsToProps = ({
  fetchResults,
})

export default connect(mapStateToProps, mapActionsToProps)(Sidebar)