import { cartReducer } from '../cartReducer';
import * as actions from '../../actions';

describe('cart', () => {
    const initialState = {};

    it('returns initial state as default', () => {
        expect(cartReducer(undefined, {})).toEqual(initialState);
    });

    it('handles ADD_TO_CART', () => {
        expect(
            cartReducer(initialState, {
                type: 'ADD_TO_CART',
                payload: {
                    id: 1,
                    name: 'pepperoni',
                },
            })
        ).toEqual({
            ...initialState,
            1: { id: 1, name: 'pepperoni', quantity: 1 },
        });
    });

    it('handles REMOVE_FROM_CART', () => {
        expect(cartReducer(initialState, actions.removeFromCart)).toEqual({
            ...initialState,
        });
    });

    it('handles INC_QTY', () => {
        expect(
            cartReducer(initialState, {
                type: 'INC_QTY',
                payload: {
                    id: 1,
                    name: 'pepperoni',
                    quantity: 1,
                },
            })
        ).toEqual({
            ...initialState,
            1: { id: 1, name: 'pepperoni', quantity: 2 },
        });
    });

    it('handles DEC_QTY', () => {
        expect(
            cartReducer(initialState, {
                type: 'DEC_QTY',
                payload: {
                    id: 1,
                    name: 'pepperoni',
                    quantity: 2,
                },
            })
        ).toEqual({
            ...initialState,
            1: { id: 1, name: 'pepperoni', quantity: 1 },
        });
    });

    it('handles PAYMENT_SUCCESS', () => {
        expect(cartReducer(initialState, actions.paymentSuccess)).toEqual({
            ...initialState,
        });
    });
});
