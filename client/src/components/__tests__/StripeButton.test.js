import React from 'react';
import { shallow } from 'enzyme';

import { StripeButton } from '../StripeButton';

it('renders without crashing', () => {
    const mockProps = [{}];

    expect(shallow(<StripeButton cart={mockProps} />)).toMatchSnapshot();
});
