import { Container, ListGroup, ListGroupItem } from "react-bootstrap";

const Footer = (props) => (
  <Container
    fluid
    className="text-center py-5 mt-5 border-top bg-primary shadow"
  >
    <ListGroup horizontal className="justify-content-center pb-5">
      <ListGroupItem className="border bg-primary text-light">
        contatti
      </ListGroupItem>
      <ListGroupItem className="border bg-primary text-light">
        info
      </ListGroupItem>
      <ListGroupItem className="border bg-primary text-light">
        dove siamo
      </ListGroupItem>
    </ListGroup>
    <address className="text-light">
      Via del Paradiso celestiale 666 - Paradiso
    </address>
    <span className="text-light">ParadisoDeiLibri©️</span>
  </Container>
);

export default Footer;
