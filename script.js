const modal = document.querySelector('.modal');
const addBttn = document.querySelector('.addBook');
const closeBttn = document.querySelector('.closeButton');
const submitBttn = document.querySelector('.submitButton');
const form = document.querySelector('form');
const inputs = Array.from(document.querySelectorAll('input'));

const deleteButtons = Array.from(document.querySelectorAll('.deleteButton'));
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

function toggleRead() {

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
    const bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');

    const readBttn = document.createElement('button');
    readBttn.classList.add('readButton');
    const deleteBttn = document.createElement('button');
    deleteBttn.classList.add('deleteButton');
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