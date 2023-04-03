import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class AddComments extends Component {
  state = {
    newComment: {
      comment: "",
      rate: "",
      elementId: "",
    },
  };

  fetchAddComments = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzYzU3YWM1NmIzNjAwMTMzZmU1N2MiLCJpYXQiOjE2ODA1NTIxMzIsImV4cCI6MTY4MTc2MTczMn0.ZHGVupEfAXnmeoOa0t1gPDXwjJwbavEljg6Q2zDq1MA",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state.newComment),
        },
      );

      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: data });
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  handleChange = (propertyName, propertyValue) => {
    this.setState({
      newComment: {
        ...this.state.newComment,
        elementId: this.props.asin,
        [propertyName]: propertyValue,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.fetchAddComments();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="recensione">
          <Form.Label>Recensione:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Scrivi qui il tuo commento"
            onChange={(e) => {
              this.handleChange("comment", e.target.value);
            }}
          />

          <Form.Label>Valutazione:</Form.Label>
          <Form.Control
            type="number"
            min={1}
            max={5}
            placeholder="Valuta (da 1 a 5)"
            onChange={(e) => {
              this.handleChange("rate", e.target.value);
            }}
          />
        </Form.Group>

        <Button className="w-100 mt-2" variant="success" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddComments;
