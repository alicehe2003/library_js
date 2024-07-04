const myLibrary = []; 

// Book constructor 
function Book(title, author, pages) {
    // title, author, pages, read, print 
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
} 

// get all info for a book 
Book.prototype.info = function() {
    return this.title + " by " + this.author + ", " 
    + this.pages + " pages. "; 
}

// opens pop up to collect info on new book 
function addBookToLibrary() {
    // open pop up 
    document.getElementById("overlay").style.display = "block"; 
    document.getElementById("popUp").style.display = "block"; 
}

function closePopUp() {
    // cancels adding new book 
    document.getElementById("overlay").style.display = "none"; 
    document.getElementById("popUp").style.display = "none"; 
}

function displayBook(book) {
    let library = document.getElementById("books"); 

    let bookDiv = document.createElement('div'); 
    bookDiv.className = 'book'; 
    bookDiv.innerHTML = book.info(); 
    library.appendChild(bookDiv); 
} 

// get info from form 
let newBookInfo = document.getElementById("new_book_info"); 
newBookInfo.addEventListener("submit", (e) => {
    e.preventDefault(); 

    // handle submit: add book to library 
    let title = document.getElementById("book_title").value; 
    let author = document.getElementById("book_author").value; 
    let pages = document.getElementById("book_pages").value; 

    const newBook = new Book(title, author, pages); 
    myLibrary.push(newBook); 

    // display updated library (including new book)
    displayBook(newBook); 

    // close pop up 
    closePopUp(); 
})
