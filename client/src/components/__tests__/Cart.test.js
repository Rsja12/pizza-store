import React from 'react';
import { shallow } from 'enzyme';

import { Cart } from '../Cart';

it ('renders when there are items in cart', () => {
    const mockProp = [{
        id: 1,
        name: 'pepperoni',
        quantity: 2
    }];

    expect(shallow(<Cart cart={mockProp} />)).toMatchSnapshot();
});

it ('renders when cart is empty', () => {
    const mockProp = [];

    expect(shallow(<Cart cart={mockProp} />)).toMatchSnapshot();
});