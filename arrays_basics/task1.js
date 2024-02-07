const numbers = [2, -5, 0, 7, -3, 0, 10, -8]

let positiveCount = 0

let negativeCount = 0

let zeroCount = 0

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 0) {
        positiveCount++
    }
    if(numbers[i] < 0) {
        negativeCount++
    }
    if(numbers[i] === 0) {
        zeroCount++
    }
    numbers[i] += 1
}

console.log("Positive numbers:", positiveCount)

console.log("Negative numbers:", negativeCount)

console.log("Zero numbers:", zeroCount)