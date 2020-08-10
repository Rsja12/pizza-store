import React from 'react';
import { shallow } from 'enzyme';

import { Menu } from '../Menu';

it ('renders without crashing', () => {
    const mockMenu = [
        {
            id: 1,
            name: 'pepperoni',
            quantity: 2
        },
    ];

    expect(shallow(<Menu menu={mockMenu} />)).toMatchSnapshot();
});