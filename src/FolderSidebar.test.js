import React from 'react';
import ReactDOM from 'react-dom';
import FolderSidebar from './FolderSidebar';
import renderer from 'react-test-renderer'

describe('FolderSidebar component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FolderSidebar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<FolderSidebar />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});