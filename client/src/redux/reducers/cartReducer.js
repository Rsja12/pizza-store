import _ from 'lodash'

export default ( state = {}, action ) => {
    const pizza = action.payload

    switch( action.type ) {
        case 'ADD_TO_CART':
            pizza.quantity = pizza.quantity + 1 || 1
            return { ...state, [pizza.id]: pizza }
        case 'REMOVE_FROM_CART':
            return _.omit(state, pizza.id) 
        case 'INC_QTY':
            return {
                ...state,
                [pizza.id]: {
                    ...pizza,
                    quantity: pizza.quantity + 1
                }
            }
        case 'DEC_QTY':
            if( pizza.quantity > 1 ) {
                return {
                    ...state,
                    [pizza.id]: {
                        ...pizza,
                        quantity: pizza.quantity - 1
                    }
                } 
            }
            return _.omit( state, pizza.id )
        case 'PAYMENT_SUCCESS':
            return {}
        default: 
            return state 
    }

}   

