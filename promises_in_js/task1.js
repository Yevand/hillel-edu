const greeting = (textToWrite, timerSetUp) => {
    setTimeout(() => {
        console.log(textToWrite)
    }, timerSetUp);
};

greeting("Hi there!", 3000);