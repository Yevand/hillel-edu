export default class Book {
    constructor(title, author, year) {
        this._title = title
        this._author = author
        this._year = year
    }

    get title() {
        return this._title
    }

    set title(value) {
        if(typeof value !== "string"){
            console.log("Title should be 'string' type")
            return
        }

        if(value.length < 1) {
            console.log("Title length should be at least 1 symbol")
            return
        }

        if(value === ""){
            console.log("Title cannot be empty")
            return
        }

        return value
    }

    get author(){
        return this._author
    }

    set author(value) {
        if (typeof value !== "string") {
            console.log("Author name should be 'string' type")
            return
        }
        if (value.length < 1) {
            console.log("Author name length should be at least 1 symbol")
            return
        }

        if (value === "") {
            console.log("Author name cannot be empty")
            return
        }

        return value
    }

    get year(){
        return this._year
    }

    set year(value){
        if(typeof value !== "number"){
            console.log("Year of publishing should be 'number' type")
            return
        }

        if(value < 0) {
            console.log("Year of publishing cannot be a negative number")
            return
        }

        if(value < 2000 && value >= 0){
            console.log("Publications before 2000 are not accepted")
            return
        }
        if(value > 2024){
            console.log("The publication year can only be up to this year")
            return
        }

        if (value === "") {
            console.log("Year of publishing cannot be empty")
            return
        }

        return value
    }

    describe() {
        console.log(`"${this._title}" book was written by ${this._author}. The year of publishing is ${this._year}.`)
    }
}
