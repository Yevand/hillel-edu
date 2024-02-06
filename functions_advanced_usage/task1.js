function handleNum(number, onEven, onOdd) {
    return number % 2 === 0 ? onEven() : onOdd()
}
const handleEven = () => console.log("Number is even")

const handleOdd = () => console.log("Number is odd")

handleNum(0, handleEven, handleOdd)