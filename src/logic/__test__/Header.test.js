import React from 'react';
import { expect } from '@jest/globals';
import renderer from 'react-test-renderer';

import Header from '../../components/Header';

describe('test header', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot('Math Magicians');
  });
});