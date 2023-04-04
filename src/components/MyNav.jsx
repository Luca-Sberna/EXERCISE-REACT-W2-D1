import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/img/logo.jpg";

const MyNav = (props) => (
  <Navbar sticky="top" bg="primary" expand="lg" className="border-bottom">
    <Container fluid>
      <Navbar.Brand href="#home">
        <img src={logo} alt="logo" style={{ width: "3rem" }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNav;
