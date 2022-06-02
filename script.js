const modal = document.querySelector('.modal');
const addBttn = document.querySelector('.addBook');
const closeBttn = document.querySelector('.closeButton');
const submitBttn = document.querySelector('.submitButton');
const form = document.querySelector('form');
const content = document.querySelector('.content');
const shelf = document.querySelector('.shelf');
const readBttns = Array.from(document.querySelectorAll('.readButton'));
const inputs = Array.from(document.querySelectorAll('input'));
let myLibrary = [];
let dataCounter = 0;

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.showInfo = function () {
    console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'has read' : 'hasnt read'}`);
}

function toggleModal() {
    modal.classList.toggle('showModal');
}

function toggleRead(bttn) {
    bttn.classList.toggle('active');
}
// Disables modal if overlay area is clicked
function windowOnClick(event) {
    if (event.target == modal) {
        toggleModal();
        form.reset();
    }
}
function createBook(formData) {
    let title, author, pages, read;
    [title, author, pages, read] = formData.values();
    (read == 'on') ? read = true : read = false;
    let book = new Book(title, author, pages, read);
    addBookToLibrary(book);
}
function addBookToLibrary(book) {
    // Check if dupe
    myLibrary.push(book);
    // Create element
    createBookElement(book);
}
function clearForm() {
    form.reset();
}

function createBookElement(book) {
    console.log('make the card');
    createCardElements(book);
}

function createCardElements(book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');

    const titleP = document.createElement('span');
    titleP.classList.add('titleP');
    titleP.innerText = book.title;

    const authorP = document.createElement('span');
    authorP.classList.add('authorP');
    authorP.innerText = book.author;

    const pagesP = document.createElement('span');
    pagesP.classList.add('pagesP');
    pagesP.innerText = `Number of pages: ${book.pages}`;

    const readBttn = document.createElement('button');
    readBttn.classList.add('readButton');
    if (book.read) {
        readBttn.innerText = "Read";
        readBttn.classList.add('active');
    }
    else readBttn.innerText = "Hasn't read";

    const deleteBttn = document.createElement('button');
    deleteBttn.classList.add('deleteButton');
    deleteBttn.innerText = "Delete";

    bookCard.appendChild(titleP);
    bookCard.appendChild(authorP);
    bookCard.appendChild(pagesP);
    bookCard.appendChild(readBttn);
    bookCard.appendChild(deleteBttn);

    readBttn.setAttribute('data-key', dataCounter);
    deleteBttn.setAttribute('data-key', dataCounter);
    bookCard.setAttribute('data-key', dataCounter);
    shelf.appendChild(bookCard);
    readBttns.push(readBttn);
    createListeners();
    dataCounter++;
}

function createListeners() {
    for (let bttn of readBttns) {
        bttn.addEventListener('click', (e) => {
            console.log(`click ${e.target.getAttribute('data-key')}`)
            toggleRead(bttn);
        });
    }
}

addBttn.addEventListener('click', toggleModal);
closeBttn.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);

submitBttn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal();
    const formData = new FormData(form);
    createBook(formData);
    clearForm();
})


