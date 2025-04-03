// store.js
import { combineReducers, createStore } from "redux";
import { someReducer } from "./reducers";

const rootReducer = combineReducers({
  someFeature: someReducer,
});

const store = createStore(rootReducer);

export default store;
