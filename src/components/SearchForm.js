import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { setSearchQuery, fetchResults, clearError } from '../store/actions/searchFormActions'
import { TextField, Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

const SearchForm = ({
  loading,
  error,
  clearError,
  fetchResults,
  searchQuery,
  setSearchQuery,
}) => {

  useEffect(() => {
    clearError()
  }, [searchQuery])

  return (
    <div className="searchForm">
        <TextField className="input" error={error ? true : false} value={searchQuery} onChange={e => setSearchQuery(e.target.value)} label="Please input search query" />
        <Button 
          className="button"
          variant="contained" color="primary"
          style={{backgroundColor: loading ? 'rgba(0, 0, 0, 0.12)' : '', color: loading ? '#333' : ''}} 
          startIcon={<SearchIcon />} 
          disabled={loading} 
          onClick={() => fetchResults(searchQuery)}
        >Search</Button>
    </div>
  )
}

const mapStateToProps = state => ({
  loading: state.searchForm.loading,
  error: state.searchForm.error,
  searchQuery: state.searchForm.searchQuery,
})

const mapActionsToProps = ({
  clearError,
  fetchResults,
  setSearchQuery,
})

export default connect(mapStateToProps, mapActionsToProps)(SearchForm)