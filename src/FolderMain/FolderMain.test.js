import React from 'react';
import ReactDOM from 'react-dom';
import FolderMain from './FolderMain';
import renderer from 'react-test-renderer'

describe('FolderMain component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FolderMain />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<FolderMain />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});