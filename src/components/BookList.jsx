import SingleBook from "./SingleBook";
import { Col } from "react-bootstrap";
import { Component } from "react";

class BookList extends Component {
  render() {
    return (
      <>
        {this.props.books.map((book, index) => {
          return (
            <Col md={6} lg={3} className="mt-5">
              <SingleBook key={`book-${index}`} book={book} />
            </Col>
          );
        })}
      </>
    );
  }
}

export default BookList;
