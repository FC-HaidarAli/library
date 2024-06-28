const myLibrary = [];

function Book(title, author, numberOfPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.haveRead = haveRead;
}

function addBookToLibrary() {
    const newBook = new Book("Harry Potter Philosopher's Stone", "J.K Rowling", "223", false);
    myLibrary.push(newBook);
}