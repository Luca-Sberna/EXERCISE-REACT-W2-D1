import { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

class InputSearch extends Component {
  state = {
    search: "",
  };

  handleChange = (search) => {
    this.setState({ search });
  };

  handleSearch = () => {};
  render() {
    return (
      <Container className="justify-content-center d-flex pt-2">
        <InputGroup className=" shadow border border-dark rounded">
          <Form.Control
            placeholder="Inserisci il libro che preferisci"
            aria-label="Books"
            value={this.state.search}
            onChange={(e) => this.handleChange(e.target.value)}
            className="border border-dark shadow"
          />
          <Button
            onClick={() => this.props.onSearch(this.state.search)}
            variant="outline-dark"
            id="button-search"
            className="align-items-center"
          >
            <span>Cerca</span>
          </Button>
        </InputGroup>
      </Container>
    );
  }
}

export default InputSearch;
