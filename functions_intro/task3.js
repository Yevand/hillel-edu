function checkOrder(available, ordered) {
    switch(true) {
        case available < ordered:
            console.log("Your order is too large, we don’t have enough goods.")
            break
        case ordered === 0:
            console.log("Your order is empty")
            break
        case available >= ordered:
            console.log("Your order is accepted")
    }
}

checkOrder(50, 5)