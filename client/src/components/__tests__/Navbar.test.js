import React from 'react';
import { shallow } from 'enzyme';

import { Navbar } from '../Navbar';

it('renders with empty cart', () => {
    const mockCart = [];

    expect(shallow(<Navbar cart={mockCart} />)).toMatchSnapshot();
});

it('renders with at least one item in cart', () => {
    const mockCart = [{}];

    expect(shallow(<Navbar cart={mockCart} />)).toMatchSnapshot();
});
