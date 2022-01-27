import React, { useEffect, useState } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'

function BooksApp(props) {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    // Get All Books On First Render
    BooksAPI.getAll().then(books => setBooks(books));
  }, []);  // Hook run on componentDidMount

  let updateBookShelf = (selectedBook, selectedShelf) => {
    BooksAPI.update(selectedBook, selectedShelf)
    .then(response => {
      //update book shelf with the selected shelf
      selectedBook.shelf = selectedShelf;
      setBooks(prevState => {
        return prevState
          // remove book from previous shelf
          .filter(book => book.id !== selectedBook.id)
          // add add the selected Book with the new shelf
          .concat(selectedBook)
      });
    })
  }
  return (
    <div className="app">
      <Routes>
        <Route path='/search' element={<SearchBooks books={books} updateBookShelf={updateBookShelf} />} />
        <Route exact path='/' element={<ListBooks books={books} updateBookShelf={updateBookShelf} />} />
      </Routes>
    </div>
  )
}

export default BooksApp
