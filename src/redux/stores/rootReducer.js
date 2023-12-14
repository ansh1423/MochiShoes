import {reducer as authReducer} from '../slices/Auth'
import {combineReducers} from '@reduxjs/toolkit';
import {reducer as productReducer} from '../slices/Product'
import {reducer as cartReducer} from '../slices/Cart'
import {reducer as orderReducer} from '../slices/Order'
export const rootReducer = combineReducers({
    user:authReducer,
      product:productReducer,
      cart:cartReducer,
      order:orderReducer,
})
export default rootReducer