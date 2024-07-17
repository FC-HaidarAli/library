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
    container.id = bookNumber;
    title = document.createElement("p");
    title.textContent = `Title: ${myLibrary[bookNumber].title.value}`;
    author = document.createElement("p");
    author.textContent = `Author: ${myLibrary[bookNumber].author.value}`;
    numberOfPages = document.createElement("p");
    numberOfPages.textContent = `Number of Pages: ${myLibrary[bookNumber].numberOfPages.value}`;
    readCheck = document.createElement("p");
    readCheck.textContent = `Have you read it: ${myLibrary[bookNumber].haveRead.value}`;
    removeButton = document.createElement("button");
    removeButton.classList.add("removeButton");
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.addEventListener('click', () => {
        displayCard = document.getElementById(bookNumber);
        displayCard.style.display = "none";
    })

    container.appendChild(title);
    container.appendChild(author);
    container.appendChild(numberOfPages);
    container.appendChild(readCheck);
    container.appendChild(removeButton);

    gridDisplay.appendChild(container);

}

gridDisplay = document.querySelector(".grid-display");
bookForm = document.querySelector("#bookForm");
bookForm.style.display = "none";
a = 0;

const newBookButton = document.querySelector("#newBookButton");
newBookButton.addEventListener('click', () => {
    if (a == 0) {
        bookForm.style.display = "block";
        a = 1;
    } else {
        bookForm.style.display = "none";
        a = 0;
    }
})

const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener('click', () => {
    addBookToLibrary();
    console.log("check");
})
//NOTES
//Left Off Here, No need to continue as the point of the project was to learn JavaScript, can code front-end later on though.