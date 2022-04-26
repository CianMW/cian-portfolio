import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./corporate.css";
import CommerceNav from "./CommerceNav";
import CommerceFooter from "./CommerceFooter";

const CorporateHome = () => {
  return (
    <Container fluid className="p-0 corporate-container">
      <CommerceNav/>
      <CommerceFooter/>
    </Container>
  );
};

export default CorporateHome;
