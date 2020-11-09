import axios from 'axios'
import {
  GET_COCKTAILS,
} from '../actions/types'

import get from "lodash/get";

export const fetchCocktails = () => async dispatch => {

  let cocktails
  try {
    cocktails = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
  } catch (e) {
    console.log(e)
  }

  dispatch({
    type: GET_COCKTAILS,
    payload: get(cocktails, 'data.drinks') || []
  })
}