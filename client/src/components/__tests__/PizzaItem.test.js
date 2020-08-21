import React from 'react';
import { shallow } from 'enzyme';

import {PizzaItem} from '../PizzaItem';

let wrapper;
let mockProps;

beforeEach(() => {
    mockProps = {
        addToCart: jest.fn(),
        pizza: {
            name: 'pepperoni',
            ingredients: ['pepperoni', 'mozarella', 'tomato sauce'],
        },
    }

    wrapper = shallow(<PizzaItem {...mockProps} />);
});

it ('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
});

it ('calls addToCart on button click', () => {
    wrapper.find('.hidden.mt-auto').simulate('click');
    expect(mockProps.addToCart).toHaveBeenCalledTimes(1);
});

// test