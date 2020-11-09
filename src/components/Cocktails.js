import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Cocktail from './Cocktail'
import { fetchCocktails } from '../store/actions/cocktailsActions'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Cocktails = ({
  cocktails,
  fetchCocktails
}) => {

  const classes = useStyles();

  useEffect(() => {
    fetchCocktails()
  }, [])

  return (
    <div className="cocktails">
      { 
        cocktails.map(item => <Cocktail classes={classes} item={item}/>) 
      }
    </div>
  )
}

const mapStateToProps = state => ({
    cocktails: state.cocktails.cocktails
})

const mapActionsToProps = ({
  fetchCocktails,
})

export default connect(mapStateToProps, mapActionsToProps)(Cocktails)