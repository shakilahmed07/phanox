import { ActionTypes } from "./admin/Type"

export const getProducts = (data) => {
    return {
        type : ActionTypes.GET_PRODUCTS,
        payload : data
    }
}