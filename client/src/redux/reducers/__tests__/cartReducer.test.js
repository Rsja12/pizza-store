import {cartReducer} from '../cartReducer';

describe('cart', () => {

    const initialState = {};

    it ('returns initial state as default', () => {
        expect(cartReducer(undefined, {})).toEqual(initialState);
    });

    it ('handles ADD_TO_CART', () => {
        expect(cartReducer(initialState, {
            type: 'ADD_TO_CART',
            payload: {
                id: 1,
                name: 'pepperoni'
            }
        }))
        .toEqual({
            ...initialState,
            '1': {id: 1, name: 'pepperoni', quantity: 1}
        })
    });

});