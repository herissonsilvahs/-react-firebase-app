import auth from './auth'
import post from './post'

import { combineReducers } from 'redux'

const index = combineReducers({
  auth,
  post
})

export default index