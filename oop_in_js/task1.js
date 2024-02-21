import Book from "./Book.js";
import Ebook from "./Ebook.js";

const firstBook = new Book("How to Win Friends", "Dale Carnegie", 2005)

const secondBook = new Book("Rich Dad Poor Dad", "Robert Kiyosaki ", 2020)

const thirdBook = new Book("La Divina Commedia", "Dante Alighieri", 2022)

firstBook.describe()
console.log("----------------------------------------------------------------------------------------------------------------------------------------------")

secondBook.describe()
console.log("----------------------------------------------------------------------------------------------------------------------------------------------")

thirdBook.describe()
console.log("----------------------------------------------------------------------------------------------------------------------------------------------")

const forthBook = new Ebook("The Adventures of Sherlock Holmes", "Sir Arthur Ignatius Conan Doyle", 2010, "ePub")

forthBook.printInfo()
console.log("----------------------------------------------------------------------------------------------------------------------------------------------")

forthBook.format = "paper"
console.log("----------------------------------------------------------------------------------------------------------------------------------------------")

const eVersion = Ebook.digitize(thirdBook,"pdf")

eVersion.printInfo()
