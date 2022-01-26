import React, { Component } from "react";
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

function ListBooks(props) {

    const { books, updateBookShelf } = props;

    let getShelfBooks = (shelfType) => { return books.filter(book => book.shelf === shelfType) };
    return (
        <div className="list-books">

            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookShelf title="Currently Reading" shelfBooks={getShelfBooks("currentlyReading")} updateBookShelf={updateBookShelf} />
                <BookShelf title="Want to Read" shelfBooks={getShelfBooks("wantToRead")} updateBookShelf={updateBookShelf}/>
                <BookShelf title="Read" shelfBooks={getShelfBooks("read")} updateBookShelf={updateBookShelf}/>
            </div>
            <div className="open-search">
              <Link to="/search"><button>Add a book</button></Link>
            </div>
        </div>
    )
}
export default ListBooks;