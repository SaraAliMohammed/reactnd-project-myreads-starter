import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {


  render() {
    return (
      <div className="app">
        <Routes>
          <Route path='/search' element={<SearchBooks />} />


          <Route exact path='/' element={<ListBooks />}/>

        </Routes>
      </div>
    )
  }
}

export default BooksApp
