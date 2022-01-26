import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    // Get All Books On First Render
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  updateBookShelf = (selectedBook, selectedShelf) => {
    BooksAPI.update(selectedBook, selectedShelf)
    .then(response=>{
      //update book shelf with the selected shelf
      selectedBook.shelf=selectedShelf;
      this.setState(currentState => ({
        books: currentState.books
          // remove book from previous shelf
          .filter(book => book.id !== selectedBook.id)
          // add add the selected Book with the new shelf
          .concat(selectedBook)
      }));
    })
    /*
      BooksAPI.update(changedBook, shelf).then(response => {
      // set shelf for new or updated book
      changedBook.shelf = shelf;
      // update state with changed book
      this.setState(prevState => ({
        books: prevState.books
          // remove updated book from array
          .filter(book => book.id !== changedBook.id)
          // add updated book to array
          .concat(changedBook)
      }));
    });
    */
  }

  render() {
    return (
      <div className="app">
        <Routes>
          <Route path='/search' element={<SearchBooks />} />
          <Route exact path='/' element={<ListBooks books={this.state.books} updateBookShelf={this.updateBookShelf}/>} />
        </Routes>
      </div>
    )
  }
}

export default BooksApp
