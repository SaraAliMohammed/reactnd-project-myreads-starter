import React, { Component } from 'react'
import Book from './Book';

class BookShelf extends Component {

    render() {
        const { title, shelfBooks, updateBookShelf } = this.props;
        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{title}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {shelfBooks.map(book =>
                                <li key={book.id}>
                                    <Book book={book} updateBookShelf={updateBookShelf} />
                                </li>
                            )}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}
export default BookShelf;
