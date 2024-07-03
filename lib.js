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

function displayBooks() {
    for (book in myLibrary) {
        display(book); 
    }

    function display(book) {
        // display singular book 
        // TODO
    }
}

// get info from form 
let newBookInfo = document.getElementById("new_book_info"); 
newBookInfo.addEventListener("submit", (e) => {
    e.preventDefault(); 

    // handle submit: add book to library 
    let title = document.getElementById("book_title"); 
    let author = document.getElementById("book_author"); 
    let pages = document.getElementById("book_pages"); 

    

    // close pop up 
    closePopUp(); 
})
