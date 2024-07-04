import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import reducerData from "./reducers/reducer";

const store = createStore(reducerData, applyMiddleware(thunk));

export default store;
