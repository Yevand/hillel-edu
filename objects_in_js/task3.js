const car1 = {
    brand: "Toyota",
    model: "RAV-4",
    year: 2005
}

const car2 = {
    brand: "Mercedes",
    model: "Vito",
    owner: "Олег"
}

const car3 = {...car2, ...car1}

console.log(car3)
