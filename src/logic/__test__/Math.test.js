import React from 'react';
import renderer from 'react-test-renderer';

import Math from '../../components/Math';

describe('test math', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Math />).toJSON();
    expect(tree).toMatchSnapshot('Welcome to Our Home Page');
  });
});
