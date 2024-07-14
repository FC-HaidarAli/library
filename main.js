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
    display(myLibrary.indexOf(newBook));
}

function display(bookNumber) {
    container = document.createElement("div");
    container.classList.add("grid-container");
    title = document.createElement("p");
    title.textContent = `Title: ${myLibrary[bookNumber].title.value}`;
    author = document.createElement("p");
    author.textContent = `Author: ${myLibrary[bookNumber].author.value}`;
    numberOfPages = document.createElement("p");
    numberOfPages.textContent = `Number of Pages: ${myLibrary[bookNumber].numberOfPages.value}`;
    readCheck = document.createElement("p");
    readCheck.textContent = `Have you read it: ${myLibrary[bookNumber].haveRead.value}`;

    container.appendChild(title);
    container.appendChild(author);
    container.appendChild(numberOfPages);
    container.appendChild(readCheck);

    gridDisplay.appendChild(container);
}

//placeholder info to make sure function display is working
const placeholder1 = new Book("Harry Potter Philosopher's Stone", "J.K Rowling", "223", false);
const placeholder2 = new Book("11/22/63", "Stephen King", "849", true);
const placeholder3 = new Book("The Hobbit", "J.R.R Tolkien", "310", false);
myLibrary.push(placeholder1, placeholder2, placeholder3);

gridDisplay = document.querySelector(".grid-display");

const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener('click', () => {
    addBookToLibrary();
    console.log("check");
})
