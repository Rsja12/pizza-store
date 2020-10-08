import React from 'react';
import { shallow } from 'enzyme';

import { CartList } from '../CartList';

let wrapper;
let mockProps;

beforeEach(() => {
    mockProps = {
        pizza: {
            id: 1,
            name: 'test',
            quantity: 3,
        },
        decreaseQuantity: jest.fn(),
        increaseQuantity: jest.fn(),
        removeFromCart: jest.fn(),
    };

    wrapper = shallow(<CartList {...mockProps} />);
});

it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
});

it('calls functions on icon click', () => {
    wrapper.find('.quantity-btn.decrease').simulate('click');
    expect(mockProps.decreaseQuantity).toHaveBeenCalledTimes(1);

    wrapper.find('.quantity-btn.increase').simulate('click');
    expect(mockProps.increaseQuantity).toHaveBeenCalledTimes(1);

    wrapper.find('.remove-btn').simulate('click');
    expect(mockProps.removeFromCart).toHaveBeenCalledTimes(1);
});
