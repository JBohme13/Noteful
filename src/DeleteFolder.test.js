import React from 'react';
import ReactDOM from 'react-dom';
import DeleteFolder from './DeleteFolder';
import renderer from 'react-test-renderer'

describe('DeleteFolder component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DeleteFolder />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<DeleteFolder />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});