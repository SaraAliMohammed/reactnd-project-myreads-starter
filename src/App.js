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


  render() {
    return (
      <div className="app">
        <Routes>
          <Route path='/search' element={<SearchBooks />} />
          <Route exact path='/' element={<ListBooks books={this.state.books} />} />
        </Routes>
      </div>
    )
  }
}

export default BooksApp
