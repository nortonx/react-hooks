import { allReducers } from './reducers'
import { numberAdd2 } from './actions/number'

const initialState = {
  cart: [],
  products: [],
  user: null,
  // foco
  number: 0,
}

export {
    initialState,
    allReducers,
    numberAdd2
}
