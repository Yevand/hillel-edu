const numbers = [1, 2, 3, 4, 5]

const changedNumbers = numbers.map((element)=>  element * numbers.indexOf(element))

console.log(changedNumbers)