import React from 'react';
import { expect } from '@jest/globals';
import renderer from 'react-test-renderer';

import Quote from '../../components/Quote';

describe('test quote', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot('pure mathematics is, in its way, the poetry of logical ideas.');
  });
});