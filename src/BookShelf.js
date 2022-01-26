import React, { Component } from 'react'
import Book from './Book';

class BookShelf extends Component {

    render() {
        const { title, shelfBooks } = this.props;
        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{title}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {shelfBooks.map(book =>
                                <li key={book.id}>
                                    <Book title={book.title} authors={book.authors.join(', ')} imgUrl={book.imageLinks.smallThumbnail} shelf={book.shelf} />
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
