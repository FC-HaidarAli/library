const myLibrary = [];

function Book(title, author, numberOfPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.haveRead = haveRead;
}

function addBookToLibrary() {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const numberOfPages = document.querySelector("#numberOfPages");
    const haveRead = document.querySelector("#haveRead");
    
    const newBook = new Book(title, author, numberOfPages, haveRead);
    myLibrary.push(newBook);
    console.log(myLibrary[0]);
}

function display() {

}

//placeholder info to make sure function display is working
const placeholder1 = new Book("Harry Potter Philosopher's Stone", "J.K Rowling", "223", false);
const placeholder2 = new Book("11/22/63", "Stephen King", "849", true);
const placeholder3 = new Book("The Hobbit", "J.R.R Tolkien", "310", false);
myLibrary.push(placeholder1, placeholder2, placeholder3);

const display = document.querySelector(".grid-display");
const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener('click', () => {
    addBookToLibrary();
    console.log("check");
})
