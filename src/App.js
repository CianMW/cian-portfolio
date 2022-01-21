import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from './components/SideNav';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';


function App() {

  const [wid, setWid] = useState("0%");

  const openSideNav = () => {
    setWid("25%")
 }

  const closeSideNav = () => {
    setWid("0%")
    // setAnimation("")
 }


  return (
    <Container fluid className="p-0 m-0 ">
      <BrowserRouter>
      <Row className="m-0 p-0 header-background text-nowrap justify-content-left align-items-center">
      <Col sm={2} className="  col-2 sideNavButton text-align-left" onClick={e => openSideNav()}>      
    <i className="bi bi-list" ></i>
      </Col>
      <Col sm={8} className="justify-content-center p-0 m-0 col-8">
        <span className="fw-bold align-center main-title">Weather @</span>
      </Col>
      <Col className="col-2"></Col>

    </Row>
    <SideNav closeSideNav={closeSideNav} wid={wid}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
