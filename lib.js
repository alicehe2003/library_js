const myLibrary = []; 

// Book constructor 
function Book(title, author, pages) {
    // title, author, pages, read, print 
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.read = false; 
} 

// get all info for a book 
Book.prototype.info = function() {
    let str = this.title + " by " + this.author + ", " 
    + this.pages + " pages, "; 

    if (this.read) {
        str = str + " read"; 
    } else {
        str = str + " not read yet"; 
    }

    return str; 
}

function addBookToLibrary(book) {
    myLibrary.push(book); 
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
