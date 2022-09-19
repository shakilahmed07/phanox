import {ActionTypes} from './Type'

export const addCustomProduct = (product) =>{
    console.log(product)
    return {
        type : ActionTypes.ADD_CUSTOM_PRODUCT,
        payload : product
    }
};