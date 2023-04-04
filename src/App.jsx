import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Row, Container } from "react-bootstrap";
import { Component } from "react";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import MyNav from "./components/MyNav";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";
import InputSearch from "./components/InputSearch";

class App extends Component {
  state = {
    filterBooks: fantasy,
  };

  handleSearch = (searchQuery) => {
    const filterBooks = fantasy.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    this.setState({ filterBooks });
  };

  render() {
    return (
      <div className="App bg-dark ">
        <MyNav />

        <Welcome />

        <Container className="bg-primary rounded-4 border border-light ">
          <Row>
            <BookList books={this.state.filterBooks} />
          </Row>
        </Container>

        <MyFooter />
      </div>
    );
  }
}

export default App;
