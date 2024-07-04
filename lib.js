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
    bookDiv.setAttribute('data-title', book.title); 
    
    // create button to remove book 
    let remove = document.createElement("button"); 
    remove.className = "remove_button"; 
    remove.textContent = "remove"; 
    remove.addEventListener("click", removeBook); 
    bookDiv.appendChild(remove); 

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

    // reset placeholder values 
    document.getElementById("book_title").value = ''; 
    document.getElementById("book_author").value = ''; 
    document.getElementById("book_pages").value = '';

    // close pop up 
    closePopUp(); 
})

// remove the book when button clicked 
function removeBook(event) {
    let buttonClicked = event.target; 
    let bookDiv = buttonClicked.parentElement; 
    let title = bookDiv.getAttribute('data-title'); 

    const bookIndex = myLibrary.findIndex(book => book.title === title); 
    if (bookIndex !== -1) {
        myLibrary.splice(bookIndex, 1); 
    }
    
    bookDiv.remove(); 
}
