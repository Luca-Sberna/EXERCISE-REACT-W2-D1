import { Container } from "react-bootstrap";
import InputSearch from "./InputSearch";
import { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <Container className="text-center p-4 border bg-primary rounded-4 my-4 shadow w-50">
        <h1>Benvenuto nel Paradiso Dei Libri📚</h1>
        <p>Ti offriamo il meglio del momento dove e quando vuoi!🫢</p>
        <InputSearch onSearch={this.handleSearch} />
      </Container>
    );
  }
}

export default Welcome;
