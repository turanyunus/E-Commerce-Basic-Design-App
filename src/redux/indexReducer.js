import { ADD_BASKET, ADD_FAVORITE_LIST } from './indexAction'

const INITIAL_STATE = {
  basketList: [],
  favoriteList: []
}

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case ADD_BASKET:
      return { ...state, basketList: action.payload }
    case ADD_FAVORITE_LIST:
      return { ...state, favoriteList: action.payload }
    default:
      return state
  }
}
