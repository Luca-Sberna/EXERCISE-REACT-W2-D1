import React, { Component } from "react";
import { Card, Form, Button, Container } from "react-bootstrap";

class Comments extends Component {
  state = {
    comment: "",
  };

  handleCommentChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addComment(this.state.comment);
    this.setState({ comment: "" });
  };

  render() {
    return (
      <>
        <Card border="light">
          <Card.Body>
            <Form>
              <Form.Group controlId="comment">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Write a comment..."
                  value={this.state.comment}
                  onChange={this.handleCommentChange}
                />
              </Form.Group>
              <Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={!this.state.comment}
                >
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default Comments;
