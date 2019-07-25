import React from 'react';
import ReactDOM from 'react-dom';
import AddFolder from './AddFolder';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('AddFolder component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddFolder />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<AddFolder />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('adds new folder and routes to home page', () => {
    const wrapper = shallow(<AddFolder />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
});