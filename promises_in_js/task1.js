const timerFunction = (textToWrite, timerSetUp) => {
    setTimeout(() => {
        console.log(textToWrite)
    }, timerSetUp);
};

timerFunction("Hi there!", 3000);