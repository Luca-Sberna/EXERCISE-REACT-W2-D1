import { Component } from "react";
import { Card, Button, Container, Spinner } from "react-bootstrap";
import CommentArea from "./CommentArea ";
import AddComments from "./AddComment";

class SingleBook extends Component {
  state = {
    selected: false,
    viewComments: false,
    addComment: false,
    loading: false,
  };

  handleOnClick = () => {
    this.setState({ selected: !this.state.selected });
  };
  render() {
    return (
      <Card
        className={`card shadow ${this.state.selected ? "selected" : ""}`}
        onClick={() => {
          this.setState(this.handleOnClick);
        }}
      >
        <Card.Img
          className="img-fluid"
          variant="top"
          src={this.props.book.img}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className=" text-truncate fs-4 fw-bold">
            {this.props.book.title}
          </Card.Title>
          <h5 className="d-flex">
            Prezzo:
            <Card.Text className="ps-2 text-primary ">
              {this.props.book.price}€
            </Card.Text>
          </h5>
          <h5 className="d-flex">
            Categoria:
            <Card.Text className="text-primary ps-2 text-uppercase">
              {this.props.book.category}
            </Card.Text>
          </h5>

          {this.state.viewComments && (
            <CommentArea asin={this.props.book.asin} />
          )}

          {this.state.addComment && <AddComments asin={this.props.book.asin} />}
        </Card.Body>
        <hr className="text-primary" />
        <Container className="d-flex pb-3 gap-2">
          <Button
            variant="primary border border-secondary"
            className="w-100 shadow"
            onClick={() => {
              this.setState({
                selected: true,
                viewComments: !this.state.viewComments,
              });
            }}
          >
            {this.state.loading ? (
              <Spinner variant="dark" animation="border" size="sm" />
            ) : this.state.viewComments ? (
              "Nascondi Commenti"
            ) : (
              "Mostra Commenti"
            )}
          </Button>

          <Button
            variant="secondary border border-primary"
            className="w-100 shadow"
            onClick={() => {
              this.setState({
                selected: true,
                addComment: !this.state.addComment,
              });
            }}
          >
            {!this.state.addComment ? "Scrivi commento" : "Nascondi area"}
          </Button>
        </Container>
      </Card>
    );
  }
}

export default SingleBook;
