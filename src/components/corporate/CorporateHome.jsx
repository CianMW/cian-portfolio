import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./corporate.css";

const CorporateHome = () => {
  return (
    <Container className="corporate-container">
      <Navbar bg="light" variant="light">
        <Container className="justify-content-center d-flex align-items">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="justify-content-center d-flex">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
};

export default CorporateHome;
