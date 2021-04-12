// reading and saving input to JSON

window.onload = (event) => {
    print();
};


const addBook = (ev) => {
    let books = JSON.parse(localStorage.getItem('bookList'));
    if (books === null) {
        books = [];
    }
    ev.preventDefault(); //to stop the form submitting
    var result = parseInt(document.getElementById("result").value);
    if (isNaN(result)) {
        result = 0;
    }
    let book = {
        Title: document.getElementById('title').value,
        Author: document.getElementById('author').value,
        "Total pages": document.getElementById('totalPages').value,
        "Read pages": document.getElementById('readPages').value,
        "Left pages": document.getElementById('totalPages').value - document.getElementById('readPages').value,
        Rating: result,

    }
    books.push(book);
    document.forms[0].reset();
    document.querySelector('form').reset();
    localStorage.setItem('bookList', JSON.stringify(books));
    console.log(books);
    console.log(books.length);

}

// printing inputs

function print() {

    var myBooks = JSON.parse(localStorage.getItem('bookList'));
    var col = [];
    for (var i = 0; i < myBooks.length; i++) {
        for (var key in myBooks[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
        if (col.indexOf("Actions") === -1) {
            col.push("Actions");
        }
    }

    var table = document.createElement("table");
    table.id = "table";
    var tr = table.insertRow(-1);
    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = col[i];
        tr.appendChild(th);
    }
    for (var i = 0; i < myBooks.length; i++) {
        tr = table.insertRow(-1);
        for (var j = 0; j < col.length - 1; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = myBooks[i][col[j]];
        }
        var tabCell = tr.insertCell(-1);
        let cc = "<button id='__";
        let bb = cc.concat(i.toString(), "' class='deleteRowButton'>Delete</button>");
        let gg = "<button id='____";
        let hh = gg.concat(i.toString(), "' class='editRowButton'>Edit</button>");
        // tabCell.innerHTML = bb+ " " + hh;
        //insert delete and edit buttons
        tabCell.innerHTML = "<div>" + bb + hh + "</div>";
    }


    var divContainer = document.getElementById("tableData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);

    //after page reload if there are book then add event listeners to the delete and edit buttons
    addButton();
    addEditButtonFunctionality();

}

// click functions

document.getElementById('btn').addEventListener('click', addBook);
document.getElementById('btn').addEventListener('click', print);
document.getElementById('btn').addEventListener('click', starRating);
document.getElementById('deleteBooks').addEventListener('click', deleteAllBooks);

// button add for every row for row deleting

function addButton() {
    var myBooks = JSON.parse(localStorage.getItem('bookList'));
    for (var i = 0; i < myBooks.length; i++) {
        document.getElementById('__' + i.toString()).addEventListener('click', deleteBook.bind(this, i));
    }
}

// button to add event listener to the edit button
function addEditButtonFunctionality() {
    var myBooks = JSON.parse(localStorage.getItem('bookList'));
    for (var i = 0; i < myBooks.length; i++) {
        document.getElementById('____' + i.toString()).addEventListener('click', editBook.bind(this, i));
    }
}

// make chosen row editable and swap buttons from delete/edit to save.
function editBook(id) {
    var myBooks = JSON.parse(localStorage.getItem('bookList'));

    var x = document.getElementById("table");
    var row = x.insertRow(id + 1);
    x.deleteRow(id + 2);
    var cols = [];
    var cellCounter = 0;
    for (var key in myBooks[id]) {
        cols[cellCounter] = row.insertCell(cellCounter);
        var txtBox = document.createElement("input");
        txtBox.type = "text";
        txtBox.id = "editable_cell_" + cellCounter;
        txtBox.value = myBooks[id][key];

        cols[cellCounter++].appendChild(txtBox);
    }
    let gg = "<button id='save_id_";
    let hh = gg.concat(id.toString(), "' class='saveRowButton'>Save</button>");
    cols[cellCounter] = row.insertCell(cellCounter);
    cols[cellCounter].innerHTML = hh;
    document.getElementById('save_id_' + id.toString()).addEventListener('click', saveBook.bind(this, id));

}

//save book by id and edit every cell with new values. 

function saveBook(id) {
    let numbered_cols = [];
    numbered_cols.push(2);
    numbered_cols.push(3);
    numbered_cols.push(4);
    numbered_cols.push(5);
    for (var key in numbered_cols) {
        if (isNaN(document.getElementById('editable_cell_' + numbered_cols[key]).value)) {
            alert("Wrong input format in column: " + (numbered_cols[key] + 1));
            return;
        }
    }



    var myBooks = JSON.parse(localStorage.getItem('bookList'));
    let counter = 0;
    for (var key in myBooks[id]) {
        if (numbered_cols.includes(counter)) {
            let number = document.getElementById('editable_cell_' + counter++).value;
            number = parseInt(number);
            if ((number < 0 || number > 5) && counter == 6) {
                alert("Rating is not between 0 and 5");
                return;
            }
            myBooks[id][key] = number;


        } else
            myBooks[id][key] = document.getElementById('editable_cell_' + counter++).value;
    }
    localStorage.setItem('bookList', JSON.stringify(myBooks));
    location.reload();
}

// function for deleting a row from table + JSON

function deleteBook(id) {
    var myBooks = JSON.parse(localStorage.getItem('bookList'));
    myBooks.splice(id, 1);
    localStorage.setItem('bookList', JSON.stringify(myBooks));
    location.reload();
}

// five star rating function

function starRating(star) {
    document.getElementById("result").value = star;
}

// function for deleting all books from JSON + dismiss table

function deleteAllBooks() {
    localStorage.setItem('bookList', JSON.stringify([]));
    books = [];
    location.reload();
}