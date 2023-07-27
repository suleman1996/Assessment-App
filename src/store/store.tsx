import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import FavoriteReducer from "./reducers";

const rootReducer = combineReducers({ FavoriteReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk))