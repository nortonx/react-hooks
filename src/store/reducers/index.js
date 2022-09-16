import { numberReducer } from './number'
import{ userReducer } from './user'

export const allReducers = (state, action) => {
  let newState = numberReducer(state, action)
  return userReducer(newState, action)
}

export default allReducers