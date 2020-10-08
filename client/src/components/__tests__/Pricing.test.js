import React from 'react';
import { shallow } from 'enzyme';

import { Pricing } from '../Pricing';

it('renders without crashing with empty cart', () => {
    const mockProps = [];

    expect(shallow(<Pricing cart={mockProps} />));
});

it('renders without crashing with non-empty cart', () => {
    const mockProps = [{}];

    expect(shallow(<Pricing cart={mockProps} />));
});
