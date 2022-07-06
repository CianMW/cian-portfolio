import {Navbar, Nav, Container} from 'react-bootstrap'

const CompanyNavbar = () => {

    return(
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About Us</Nav.Link>
      <Nav.Link href="#features">Services</Nav.Link>
      <Nav.Link href="#features">About Us</Nav.Link>
      <Nav.Link href="#pricing">Portfolio</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    )
}


export default CompanyNavbar