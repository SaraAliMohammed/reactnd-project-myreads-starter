import React from 'react'
import Book from './Book';

function BookShelf(props) {
    const { title, shelfBooks, updateBookShelf } = props;
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
export default BookShelf;
