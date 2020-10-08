import * as actions from '../index';

describe('actions', () => {
    const pizza = {
        id: 1,
        name: 'pepperoni',
    };

    it('creates an action to add pizza to cart', () => {
        const expectedAction = {
            type: 'ADD_TO_CART',
            payload: pizza,
        };
        expect(actions.addToCart(pizza)).toEqual(expectedAction);
    });

    it('creates an action to remove a pizza from cart', () => {
        const expectedAction = {
            type: 'REMOVE_FROM_CART',
            payload: pizza,
        };
        expect(actions.removeFromCart(pizza)).toEqual(expectedAction);
    });

    it('creates an action to increase pizza quantity', () => {
        const expectedAction = {
            type: 'INC_QTY',
            payload: pizza,
        };
        expect(actions.increaseQuantity(pizza)).toEqual(expectedAction);
    });

    it('creates an action to decrease pizza quantity', () => {
        const expectedAction = {
            type: 'DEC_QTY',
            payload: pizza,
        };
        expect(actions.decreaseQuantity(pizza)).toEqual(expectedAction);
    });

    it('creates an action to handle payment success', () => {
        const expectedAction = {
            type: 'PAYMENT_SUCCESS',
        };
        expect(actions.paymentSuccess()).toEqual(expectedAction);
    });
});
