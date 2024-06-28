const myLibrary = [];

function Book(title, author, numberOfPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.haveRead = haveRead;
}

function addBookToLibrary() {
    //const newBook = new Book("Harry Potter Philosopher's Stone", "J.K Rowling", "223", false);
    //myLibrary.push(newBook);
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const numberOfPages = document.querySelector("#numberOfPages");
    const haveRead = document.querySelector("#haveRead");

    const newBook = new Book(title, author, numberOfPages, haveRead);
    myLibrary.push(newBook);
    console.log(myLibrary[0]);
}

const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener('click', () => {
    addBookToLibrary();
    console.log("check");
})
