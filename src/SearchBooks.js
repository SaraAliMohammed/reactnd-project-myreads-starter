import React, { Component } from 'react'
import { search } from './BooksAPI'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {
    state = {
        query: '',
        searchedBooks: [],
        searchNotFound: false
    }

    handleSearch = (query) => {
        this.setState({ query });
        const { books } = this.props;
        if (query) {
            BooksAPI.search(query.trim()).then(searchedBooks => {
                if (searchedBooks && searchedBooks.length > 0) {
                    searchedBooks.map(searchBook => {
                        let book = books.find(book => book.id === searchBook.id)
                        if (book)
                            searchBook.shelf = book.shelf;
                        else
                            searchBook.shelf = "none";
                    });
                    this.setState({ searchedBooks: searchedBooks, searchNotFound: false });
                } else {
                    this.setState({ searchedBooks: [], searchNotFound: true });
                }
            })
        } else {
            this.setState({ searchedBooks: [], searchNotFound: false });
        }
    }

    render() {
        const { query, searchedBooks, searchNotFound } = this.state;
        const { updateBookShelf } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={query} onChange={(event) => this.handleSearch(event.target.value)} />
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
}
export default SearchBooks;