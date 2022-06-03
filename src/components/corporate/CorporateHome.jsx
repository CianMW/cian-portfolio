import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./corporate.css";
import CommerceNav from "./CommerceNav";
import CommerceFooter from "./CommerceFooter";
import { useEffect, useState } from "react";
import CradleLoader from "../Loader";

const CorporateHome = () => {
  const [load, setLoad] = useState("true");
  useEffect(() => {
    setTimeout(() => {
       setLoad("false");
       setTimeout(() => {
         setLoad("false none");
       }, 1000);
    }, 1500);
  }, [])
  return (
    <Container className="p-0 m-0 corporate-container">
      <CradleLoader display={load}/>
      <CommerceNav/>
      <Row className="px-5">
      <CommerceFooter/>
      </Row>
    </Container>
  );
};

export default CorporateHome;
