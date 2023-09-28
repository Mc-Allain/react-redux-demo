import { ADD_TO_CART, CHECKOUT, DECREMENT_QUANTITY, INCREMENT_QUANTITY } from "./productContants"

export const incrementQuantity = (productId) => {
    return {
        type: INCREMENT_QUANTITY,
        productId: productId,
    }
}

export const decrementQuantity = () => {
    return {
        type: DECREMENT_QUANTITY,
    }
}

export const addToCart = () => {
    return {
        type: ADD_TO_CART,
    }
}

export const checkout = () => {
    return {
        type: CHECKOUT,
    }
}