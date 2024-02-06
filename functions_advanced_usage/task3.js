function divide(numerator, denominator) {
    if(denominator === 0) {
        throw new Error("The denominator cannot be zero")
    } else if (!Number.isFinite(numerator) || !Number.isFinite(denominator)) {
        throw new Error("One or both arguments are not a number")
    }
    else {
        return numerator / denominator
    }
}

try {
    let result = divide(10, 0)
    console.log(result)
} catch (error) {
    console.error("Error occurs:", error.message)
} finally {
    console.log("Operation is complete")
}

console.log("--------------------------------------------------")

try {
    let result = divide(10, "5")
    console.log(result)
} catch (error) {
    console.error("Error occurs:", error.message)
} finally {
    console.log("Operation is complete")
}

console.log("--------------------------------------------------")

try {
    let result = divide(10, 5)
    console.log(result)
} catch (error) {
    console.error("Error occurs:", error.message)
} finally {
    console.log("Operation is complete")
}
console.log("--------------------------------------------------")

try {
    let result = divide(5, 10)
    console.log(result)
} catch (error) {
    console.error("Error occurs:", error.message)
} finally {
    console.log("Operation is complete")
}