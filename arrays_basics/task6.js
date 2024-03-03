const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

const cloneArray = structuredClone(numbersList);

cloneArray.sort((a, b) => a - b);

console.log('Unsorted array:', numbersList);

console.log('-------------------------------');

console.log('Sorted array:', cloneArray);
