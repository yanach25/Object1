export const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

export function orderByProps(initialObject, initialList) {
  if (!Array.isArray(initialList)) {
    throw new Error('initialList should be type of array');
  }

  const isArrayOfString = initialList.every((item) => typeof item === 'string');

  if (!isArrayOfString) {
    throw new Error('initialList\'s members should be type of string');
  }

  const objKeys = Object.keys(obj);

  initialList.forEach((item) => {
    if (!objKeys.includes(item)) {
      throw new Error(`There is no "${item}" property in initialObject`);
    }
  });

  const unsortedList = [];

  for (const prop in initialObject) {
    if (!initialList.includes(prop)) {
      unsortedList.push(prop);
    }
  }

  const finalList = [...initialList, ...unsortedList.sort()];

  return finalList.map((key) => ({
    key,
    value: initialObject[key],
  }));
}

orderByProps(obj, ['name', 'level']);
