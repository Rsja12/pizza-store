import React from 'react';
import Homepage from '../Homepage';
import { shallow } from 'enzyme';

it('renders Homepage component', () => {
    expect(shallow(<Homepage />)).toMatchSnapshot();
});
