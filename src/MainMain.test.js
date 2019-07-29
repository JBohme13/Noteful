import React from 'react';
import ReactDOM from 'react-dom';
import MainMain from './MainMain';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import renderer from 'react-test-renderer'

describe('MainMain component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainMain />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<MainMain />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  /*it('navigates to the add Note page when clicked', () => {
    const wrapper = shallow(<MainMain />)
    wrapper.find('add-note-container').simulate('click')
    expect(toJson(wrapper)).toMatchSNapShot()
  })*/
});