import React, {Component} from 'react';
//import PropTypes from 'prop-types';
export default class ShowingSingleBook extends Component{
	render(){

		return(
		<div>
		{this.props.books.map( (book,index) => (
			<div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ 
                            	width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail: 'NA'})` 
                            }}></div>
                            <div className="book-shelf-changer">
                              <select value={book.currentShelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">Subtitle: {book.subtitle ? book.subtitle : 'NA'}</div>
                            <div className="book-authors">Author: {book.authors ? book.authors : 'NA'}</div>
                            <div className="book-authors">Average Rating: {book.averageRating ? book.averageRating: 'NA'} </div>
							
                          </div>
         )
		
		)
		}
       	</div>
		);
	}
}