import {ActionTypes} from './admin/Type'

const initialState = {
    products : []
}

export const productReducer = (state=initialState,{type,payload}) =>{
    switch (type) {
        case ActionTypes.GET_PRODUCTS:
            return {
               products : payload
            }
        default:
            return state;
    }
}