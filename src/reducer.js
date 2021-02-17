import { combineReducers } from 'redux'

import IndexReducer from './redux/indexReducer'

const appReducer = combineReducers({
  indexReducer: IndexReducer
})

export default appReducer
