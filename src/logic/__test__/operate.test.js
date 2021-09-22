import { expect } from '@jest/globals';
import operate from '../operate';

describe('Test operations', () => {
  test('should return total + next when operation is addition', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  test('should return total after subtraction', () => {
    expect(operate(1, 2, '-')).toBe('-1');
  });

  test('should return correct total after MUltiplication', () => {
    expect(operate(1, 2, 'x')).not.toBe('3');
  });

  test('should return correct total after MUltiplication', () => {
    expect(operate(1, 2, '÷')).toBe('0.5');
  });

  test('should return correct total after doing mudullo', () => {
    expect(operate(1, 2, '%')).toBe('1');
  });
});
