import { Component } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import fantasy from "../data/books/fantasy.json";
import history from "../data/books/history.json";
import horror from "../data/books/horror.json";
import romance from "../data/books/romance.json";
import scifi from "../data/books/scifi.json";
import Comments from "./Comments";

class AllTheBooks extends Component {
  state = {
    comments: [],
  };
  getRandomNumber = () => {
    return Math.random() - 0.5;
  };
  addComment = (comment) => {
    this.setState({ comments: [comment, ...this.state.comments] });
  };

  render() {
    const allTheBooks = [
      ...fantasy,
      ...history,
      ...horror,
      ...romance,
      ...scifi,
    ];
    allTheBooks.sort(this.getRandomNumber);

    return (
      <Container className="py-5 border bg-primary rounded-4 ">
        <Row className="gap-3 justify-content-center ">
          {allTheBooks.map((book, index) => (
            <Col className="p-1" sx={12} md={5} lg={3} xl={2}>
              <Card key={`book-${index}`} className="p-2">
                <Card.Img
                  variant="top"
                  src={book.img}
                  className=" rounded"
                  style={{ height: "22rem" }}
                />
                <Card.Body className="px-1">
                  <Card.Title className="text-truncate">
                    {book.title}
                  </Card.Title>
                  <Card.Text>{book.price + "$"}</Card.Text>
                  <Card.Text>{book.category}</Card.Text>
                </Card.Body>
                <Button className="w-50" variant="success">
                  Add
                </Button>
                <Comments addComment={this.addComment} />
                <ul>
                  {this.state.comments.map((comment, index) => (
                    <li key={`comment-${index}`}>{comment}</li>
                  ))}
                </ul>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
