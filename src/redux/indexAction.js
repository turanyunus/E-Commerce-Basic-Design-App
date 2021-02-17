export const ADD_BASKET = 'add_basket'
export const ADD_FAVORITE_LIST = 'add_favorite_list'

export function addBasket(payload) {
  return {
    type: ADD_BASKET,
    payload
  }
}

export function addFavoriteList(payload) {
  return {
    type: ADD_FAVORITE_LIST,
    payload
  }
}
