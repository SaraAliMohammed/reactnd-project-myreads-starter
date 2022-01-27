import React, { useState } from 'react'
import { search } from './BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'

function SearchBooks(props) {

    const [query, setQuery] = useState("");
    const [searchedBooks, setSearchedBooks] = useState([]);
    const [searchNotFound, setSearchNotFound] = useState(false);

    const { books, updateBookShelf } = props;

    let handleSearch = (query) => {
        setQuery(query);

        if (query) {
            search(query).then(searchedBooks => {
                if (searchedBooks && searchedBooks.length > 0) {
                    searchedBooks.forEach(searchBook => {
                        let book = books.find(book => book.id === searchBook.id)
                        if (book)
                            searchBook.shelf = book.shelf;
                        else
                            searchBook.shelf = "none";
                    });
                    setSearchedBooks(searchedBooks);
                    setSearchNotFound(false);
                } else {
                    setSearchedBooks([]);
                    setSearchNotFound(true);
                }
            })
        } else {
            setSearchedBooks([]);
            setSearchNotFound(false);
        }
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value={query} onChange={(event) => handleSearch(event.target.value)} />
                </div>
            </div>
            <div className="search-books-results">
                {searchedBooks.length > 0 && (
                    <div>
                        <span>Showing {searchedBooks.length} of books.</span>
                        <ol className="books-grid">
                            {searchedBooks.map(book =>
                                <li key={book.id}>
                                    <Book book={book} updateBookShelf={updateBookShelf} />
                                </li>
                            )}
                        </ol>
                    </div>

                )}
                {searchNotFound && (
                    <h3>There is no books match your search.</h3>
                )}
            </div>
        </div>
    )
}
export default SearchBooks;