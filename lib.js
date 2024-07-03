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

// opens pop up to collect info on new book 
function addBookToLibrary() {
    // open pop up 
    document.getElementById("overlay").style.display = "block"; 
    document.getElementById("popUp").style.display = "block"; 

    // collect info on new book 
    // TODO
}

// adds book to library and close pop up screen 
function addBookAndClose() {
    // TODO

    // close pop up 
    document.getElementById("overlay").style.display = "none"; 
    document.getElementById("popUp").style.display = "none"; 
}

function cancelAdd() {
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
