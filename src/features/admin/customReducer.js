import {ActionTypes} from './Type'

const initialState = {
    customCart : []
}

export const customReducer = (state=initialState,{type,payload}) =>{
    switch (type) {
        case ActionTypes.ADD_CUSTOM_PRODUCT:
            return {
               customCart : [...state.customCart,{...payload,qty:1}]
            }
        default:
            return state;
    }
}