import { ActionTypes } from "../Constant/ActionTypes";

const initialState={
    product:[]
}

export const ProductReducers = (state= initialState, {type, payload})=>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, product:payload}

        default:
            return state;
    }
}
export const selectedProductReducer  = (state=initialState, {type, payload})=>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return{...state, ...payload}
        case ActionTypes.REMOVED_SELECTED_PRODUCT: 
        return{}
        default:
            return state;
    }
}