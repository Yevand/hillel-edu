function divide(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('The denominator cannot be zero');
  }
  if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error('One or both arguments are not a number');
  }
  return numerator / denominator;
}

try {
  const result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.error('Error occurs:', error.message);
} finally {
  console.log('Operation is complete');
}

console.log('--------------------------------------------------');

try {
  const result = divide(10, '5');
  console.log(result);
} catch (error) {
  console.error('Error occurs:', error.message);
} finally {
  console.log('Operation is complete');
}

console.log('--------------------------------------------------');

try {
  const result = divide(10, 5);
  console.log(result);
} catch (error) {
  console.error('Error occurs:', error.message);
} finally {
  console.log('Operation is complete');
}
console.log('--------------------------------------------------');

try {
  const result = divide(5, 10);
  console.log(result);
} catch (error) {
  console.error('Error occurs:', error.message);
} finally {
  console.log('Operation is complete');
}
