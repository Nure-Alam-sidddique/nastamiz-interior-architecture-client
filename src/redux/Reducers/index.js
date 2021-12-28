import { combineReducers } from "redux";
import { ProductReducers, selectedProductReducer } from "./ProductReducers";

 const reducers= combineReducers({
    allProducts:ProductReducers,
    product:selectedProductReducer
});
export default reducers;