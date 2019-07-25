import React from 'react';
import ReactDOM from 'react-dom';
import MainMain from './MainMain';
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
});