import { obj, orderByProps } from '../app';

describe('test app.js', () => {
  it('orderByProps returns sorted array of key-value', () => {
    const mockedList = [{
      key: 'name',
      value: 'мечник',
    },
    {
      key: 'level',
      value: 2,
    },
    {
      key: 'attack',
      value: 80,
    },
    {
      key: 'defence',
      value: 40,
    },
    {
      key: 'health',
      value: 10,
    },
    ];

    expect(orderByProps(obj, ['name', 'level'])).toEqual(mockedList);
  });

  it('throw error with wrong params', () => {
    expect(() => orderByProps(obj, 1)).toThrow('initialList should be type of array');
    expect(() => orderByProps(obj, [1])).toThrow('initialList\'s members should be type of string');
    expect(() => orderByProps(obj, ['name', 'test'])).toThrow('There is no "test" property in initialObject');
  });
});
