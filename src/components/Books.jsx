import React, { Component } from "react";
import axios from "axios";
import BookItem from "./BookItem";

export class Books extends Component {
  state = {
    books: [],
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get("/wp-json/wp/v2/libros/")
      .then(res => this.setState({ books: res.data, isLoaded: true }))
      .catch(err => console.log(err));
  }

  render() {
    const { books, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div>
          <h1>Qué pasa Guille?</h1>
          {books.map(book => (
            <BookItem key={book.id} book={book} />
            // <h4 key={book.id}>{book.title.rendered}</h4>
          ))}
        </div>
      );
    }
    return <h3>Loading...</h3>;
  }
}

export default Books;
