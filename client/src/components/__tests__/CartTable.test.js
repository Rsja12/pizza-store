import React from 'react';
import { shallow } from 'enzyme';

import CartTable from '../CartTable';

it('renders CartTable component', () => {
    const mockCart = [
        {
            id: 1,
            pizza: 'pepperoni',
            quantity: 2,
        },
    ];

    expect(shallow(<CartTable cart={mockCart} />)).toMatchSnapshot();
});
