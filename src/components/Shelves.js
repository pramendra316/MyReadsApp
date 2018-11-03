import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI';
import ShowingSingleBook from './ShowingSingleBook';
export default class Shelves extends Component{
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    let booksHasValues = false
    const{books} = this.state 
    if(books !== undefined && books !== null && books.length > 0 ){
      booksHasValues = true
    }
    let shelfTypes =[
    "currentlyReading",
    "wantToRead",
    "read"
    ]
 		return(
 			<div> {/* Main Div for all shelves*/}
 				<div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                     { books.map((book,index) => (
                      (book.shelf === shelfTypes[0]) && (<li key={index}> 
                        <ShowingSingleBook books={books} />
                      </li> )
                      ))
                    }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      { books.map((book,index) => (
                      (book.shelf === shelfTypes[1]) && (<li key={index}> 
                        <ShowingSingleBook books={books} />
                      </li> )
                      ))
                    }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      { books.map((book,index) => (
                      (book.shelf === shelfTypes[2]) && (<li key={index}> 
                        <ShowingSingleBook books={books} />
                      </li> )
                      ))
                    }
                    </ol>
                  </div>
                </div>
                {/* Bookshelf over now*/}
		</div> 	
		);
	}
}
