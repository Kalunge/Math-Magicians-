import calculate from '../calculate';

describe('does calculations properly', () => {
  const obj = {
    total: 'error',
    next: null,
    operation: null,
  };
  test('should return zero and null when total is "error"', () => {
    const obj = {
      total: 'error',
      next: null,
      operation: null,
    };

    expect(calculate(obj)).toEqual({
      total: 0,
      next: null,
      operation: null,
    });
  });

  test('should return a zero equal value when button is AC', () => {
    expect(calculate(obj, 'AC')).toEqual({
      total: 0,
      next: null,
      operation: null,
    });
  });

  test('should retuen empty object ', () => {
    const newObj = {
      total: 0,
      next: '0',
      operation: null,
    };

    expect(calculate(newObj, String(0))).toEqual({});
  });

  test('should update next if operation is true', () => {
    const obj = {
      total: 0,
      next: 2,
      operation: null,
    };
    const result = calculate(obj, '5');
    expect(result.next).toEqual('25');
  });

  test('should return an empty object ', () => {
    const obj = {
      total: 0,
      next: '2.5',
      operation: null,
    };

    expect(calculate(obj, '.')).toEqual({});
  });

  test('should add . to the end of next if buttonname is . ', () => {
    const obj = {
      total: 0,
      next: '25',
      operation: null,
    };

    expect(calculate(obj, '.')).toEqual({ next: '25.' });
  });

  test('should return a total if there is next and the operation is addition', () => {
    const obj = {
      total: 0,
      next: '22',
      operation: '+',
    };

    expect(calculate(obj, '=').total).toEqual('22');
  });

  test('should return empty object when there is nothing to operate and equal sign is pressed', () => {
    const obj = {
      total: 0,
      next: null,
      operation: null,
    };

    expect(calculate(obj, '=')).toEqual({});
  });

  test('should return -next when next is not null and operation is +/-', () => {
    const obj = {
      total: 0,
      next: 5,
      operation: null,
    };

    expect(calculate(obj, '+/-')).toEqual({ next: '-5' });
  });

  test('should return empty object when next and total are falsy', () => {
    const obj = {
      total: 0,
      next: null,
      operation: null,
    };

    expect(calculate(obj, '+/-')).toEqual({});
  });

  test('should return operation error when next is an operation too', () => {
    const obj = {
      total: 0,
      next: '+',
      operation: '+',
    };

    expect(calculate(obj, '+').total).toEqual('double operation error');
  });

  test('should return the addition of total and next', () => {
    const obj = {
      total: 5,
      next: 6,
      operation: '+',
    };

    expect(calculate(obj, '+').total).toEqual('11');
  });

  test('should save the buttonname(operation) if user hasnt typed a number yet', () => {
    const obj = {
      total: 5,
      next: 6,
      operation: null,
    };

    expect(calculate(obj, '+').operation).toEqual('+');
  });

  test('should save the buttonname(operation) if user hasnt typed a number yet and shift next as total', () => {
    const obj = {
      total: 5,
      next: 6,
      operation: null,
    };

    expect(calculate(obj, '+').total).toEqual(6);
  });
});
