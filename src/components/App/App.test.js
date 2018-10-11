import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should renders without crashing', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
