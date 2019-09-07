'use script';

import React from 'react';
import renderer from 'react-test-renderer';

import Counter from '../components/counter/counter.js';

describe('<Counter />', () => {
  it('is alive at start', () => {
    let component = shallow(<Counter />);
    expect(component.find('section').exists()).toBeTruthy();
  });

  it('it decrements on a down click', () => {
    let component = mount(<Counter />);
    let button = component.find('down clicker');
    button.simulate('click');
    expect(component.state('stuff')).toBe(true);
  });

  it('increments on an up click', () => {
    let component = mount(<Counter />);
    let button = component.find('up clicker');
    button.simulate('click');
    expect(component.state('stuff')).toBe(true);
  });

  // it('renders the correct text', () => {
  //   let component = mount(<Counter />);
  //   let button = component.find('button');
  //   button.simulate('click');
  //   expect(component.find('section')).text.toContain('true');
  // });

  it('renders correctly', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});