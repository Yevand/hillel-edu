function test(value) {
    if (value !== "pdf" && value !== "ePub" && value !== "fb2" && value !== "doc") {
        console.log("The format is incorrect or not supported")
        return
    }
    console.log(value)
}

// test("paper")
// test(12)
// test("PDF")
// test("pdf")

function test2(value) {
    if(value < 2000 && value >= 0){
        console.log("Publications before 2000 are not accepted")
        return
    }
    console.log(value)
}

test2(1997)
test2(0)
test2(1600)
test2(2000)
test2(2001)

