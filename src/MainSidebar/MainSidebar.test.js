import React from 'react';
import ReactDOM from 'react-dom';
import MainSidebar from './MainSidebar';
import renderer from 'react-test-renderer'

describe('MainSidebar component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainSidebar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<MainSidebar />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});