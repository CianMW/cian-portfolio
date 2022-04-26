import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./corporate.css";

const CommerceNav = () => {
  return (
      <Navbar className="p-0 commerce-nav-container shadow-sm" bg="light" variant="light">
        <Container className=" p-0 justify-content d-flex align-items">
          <Navbar.Brand href="#home"><img src="https://i.ibb.co/GcfJSd5/c-logo.png" alt="Web Developer" className="c-logo" /></Navbar.Brand>
          <Nav className="justify-content-center d-flex ">
            <div className="px-2 nav-link-container">
                <h4 className="blue-top">Home</h4>
              </div>
            <div className="px-2 nav-link-container">
                <h4 className="blue-top">Features</h4>
              </div>
            <div className="px-2 nav-link-container">
                <h4 className="blue-top">Contact</h4>
              </div>
          </Nav>
        </Container>
      </Navbar>
  );
};

export default CommerceNav;