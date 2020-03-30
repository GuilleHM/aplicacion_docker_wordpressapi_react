import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class BookPage extends Component {
  state = {
    book: {},
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get(`/wp-json/wp/v2/libros/${this.props.match.params.id}`)
      .then(res =>
        this.setState({
          book: res.data,
          isLoaded: true
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    const { book, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <Fragment>
          <Link to="/">Regresar a la página principal</Link>
          <hr />
          <h1>{book.title.rendered}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: book.content.rendered }}
          ></div>
          <h4>Editor: {book.acf.publicador}</h4>
        </Fragment>
      );
    }
    return <h3>Cargando estoyyyyy...</h3>;
  }
}

export default BookPage;
