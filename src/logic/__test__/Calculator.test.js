import React from 'react';
import { expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import Calculator from '../../components/Calculator';

describe('snapshot test for calculator Component', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot('Home');
  });
});

describe('simulate user events', () => {
  test('click', () => {
    render(<Calculator />);
    const button = screen.getByTestId('divide');
    userEvent.click(button);
    expect(onclick).toHaveBeenCalled;
  });
});
