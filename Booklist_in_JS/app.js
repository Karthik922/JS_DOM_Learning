//Book Class: Reperesend a Book
class Book{
    constructor(title, author, isbn)
    {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    } 
}

//UI Classes: Handle Ui Tasks 
class UI {
    static displayBooks()
    {
        const books = Store.getBooks();
        books.forEach((book) => UI.addBookTOList(book));

    }

    static addBookTOList(book){
        const list = document.querySelector('#book-list');
         const row = document.createElement('tr');

         row.innerHTML = `<td>${book.title}</td>
         <td>${book.author}</td>
         <td>${book.isbn}</td>
         <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
         
         `;

         list.appendChild(row);
    }
    static deleteBook(el)
    {
        console.log(el);
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }
    static showAlert(messange, className){
        //console.log(messange+' '+className);
        const div =document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(messange));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);
        setTimeout(() => document.querySelector('.alert').remove(),3000);
    }
    static clearFields()
    {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
           
    }

}

//Strore Class : Handles Storage 
    class Store{
        static getBooks(){
            let books;
            if(localStorage.getItem('books') === null)
            {
                books = [];
            }
            else
            {
                books = JSON.parse(localStorage.getItem('books'));
            }
            return books;
        }
        static addBook(book){
            const books = Store.getBooks();
            books.push(book);
            localStorage.setItem('books', JSON.stringify(books));
        }
        static removeBook(isbn){
            const books = Store.getBooks();

            books.forEach((book, index)=>{
                if(book.isbn === isbn){
                    books.splice(index, 1);
                }
            });
            localStorage.setItem('books', JSON.stringify(books));

        }
    }
//Event : Display Books
  document.addEventListener('DOMContentLoaded', UI.displayBooks);
//Event : Add a Book
document.querySelector('#book-form').addEventListener('submit', (e)=>{
    //Prevent actual Submit
    e.preventDefault();

    //Get Form Values 
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //validate 
    if(title === '' || author === '' || isbn === '')
    {
        UI.showAlert('Please Fill in all fields', 'danger');
    }
    else
    {
        //Instatiate Book
    const book = new Book(title, author, isbn);

    //Add book UI
    UI.addBookTOList(book);
    
    //Add book to store 
    Store.addBook(book);

   // console.log(title+' '+author+''+isbn);

   //Show success
   UI.showAlert('Book Added', 'success');

   //clear fields
    UI.clearFields();


    }
    
});
//Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e)=>{
    //console.log(e.target);
    UI.deleteBook(e.target);
    
    //Remove Book from Store 
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    //Show Success Message
    UI.showAlert('Book Removed', 'success');
});