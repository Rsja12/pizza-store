import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom'

import App from '../App';
import Navbar from '../components/Navbar';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<App />)
});

it ('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
});

it ('renders three <Route /> components', () => {
    expect(wrapper.find(Route).length).toEqual(3);
});

it ('renders one <Navbar /> component', () => {
    expect(wrapper.find(Navbar).length).toEqual(1);
});