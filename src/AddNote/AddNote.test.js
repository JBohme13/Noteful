import React from 'react';
import ReactDOM from 'react-dom';
import AddNote from './AddNote';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json';

describe('AddNote component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddNote />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<AddNote />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  /*it('adds a new note', () => {
    const wrapper = shallow(<AddNote/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })*/
});