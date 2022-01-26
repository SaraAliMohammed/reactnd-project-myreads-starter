import React, { Component } from "react";
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

function ListBooks(props) {

    const { books } = props;

    let getShelfBooks = (shelfType) => { return books.filter(book => book.shelf === shelfType) };
    return (
        <div className="list-books">

            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookShelf title="Currently Reading" shelfBooks={getShelfBooks("currentlyReading")} />
                <BookShelf title="Want to Read" shelfBooks={getShelfBooks("wantToRead")} />
                <BookShelf title="Read" shelfBooks={getShelfBooks("read")} />
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    )
}
export default ListBooks;