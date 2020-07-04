import React, { Component } from 'react';
import Book from './book';
import booksData from './bookData';

export default class booklist extends Component {
    constructor(props){
        super(props);
        this.state = {
            books : booksData
        }
    }
    render() {
        return (
            <section>
                <h3>This is our booklist</h3>
                {this.state.books.map(item =>
                    (<Book key={item.id} info={item} />)
                )}
            </section>
        )
    }
}
