import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {reducer as ProductReducer} from "./ProductReducer/reducer"
import {reducer as CartReducer} from "./CartReducer/reducer"
import thunk from "redux-thunk"

const rootReducer=combineReducers(ProductReducer, CartReducer)
export const store=legacy_createStore(rootReducer, applyMiddleware(thunk))