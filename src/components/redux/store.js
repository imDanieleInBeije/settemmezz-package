// file: todos/todosReducer.ts noEmit
import { combineReducers } from '@reduxjs/toolkit'

// file: store.ts
import { configureStore } from '@reduxjs/toolkit'

// We'll use redux-logger just as an example of adding another middleware
import logger from 'redux-logger'

import userDuck from './ducks/userDuck'

const reducer = combineReducers({
  // here we will be adding reducers
  userDuck
})

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production'
})

export default store;