import { ActionTypes } from "../Constant/ActionTypes"

export const setProducts=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}
export const selectedProducts=(product)=>{
    return{
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: product,
    }
}
export const removedSelectedProduct = ()=>{
    return{
        type: ActionTypes.REMOVED_SELECTED_PRODUCT,
    }
}