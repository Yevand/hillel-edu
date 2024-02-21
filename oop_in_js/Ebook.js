import Book from "./Book.js";

export default class Ebook extends Book {
    constructor(title, author, year, format) {
        super(title, author, year)
        this._format = format
    }

    get format(){
        return this._format
    }

    set format(value){
        if(value !== "pdf" && value !== "ePub" && value !== "fb2" && value !== "doc"){
            console.log("The format is incorrect or not supported")
            return
        }

        return value
    }

    printInfo(){
        console.log(`"${this._title}" book was written by ${this._author}. The year of publishing is ${this._year}, format: ${this._format}.`)
    }

    static digitize(chosenBook, format){
        return new Ebook(chosenBook._title, chosenBook._author, chosenBook._year, format)
    }
}
