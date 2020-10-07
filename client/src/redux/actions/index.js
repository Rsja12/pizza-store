export const addToCart = pizza => {
    return {
        type: 'ADD_TO_CART',
        payload: pizza 
    }
}

export const removeFromCart = pizza => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: pizza
    }
}

export const increaseQuantity = pizza => {
    return {
        type: 'INC_QTY',
        payload: pizza 
    }
}

export const decreaseQuantity = pizza => {
    return {
        type: 'DEC_QTY',
        payload: pizza
    }
}

export const paymentSuccess = () => {
    return {
        type: 'PAYMENT_SUCCESS'
    }
}
