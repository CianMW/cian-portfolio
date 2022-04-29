import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./corporate.css";
import CommerceNav from "./CommerceNav";
import CommerceFooter from "./CommerceFooter";

const CorporateHome = () => {
  return (
    <Container className="p-0 m-0 corporate-container">
      <CommerceNav/>
      <Row className="px-5">
      <CommerceFooter/>
      </Row>
    </Container>
  );
};

export default CorporateHome;
