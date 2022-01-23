import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from './components/SideNav';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
// import Scrollbars from 'react-custom-scrollbars';
import CustomScrollbar from './components/CustomScrollbar.jsx';
import TopNav from './components/TopNav';


function App() {

  const [wid, setWid] = useState("0%");
  const [display, setDisplay] = useState("block");

  const openSideNav = () => {
    setWid("25%")
    setDisplay("none")
 }

  const closeSideNav = () => {
    setWid("0%")
    setDisplay("block")

    // setAnimation("")
 }


  return (
    <Container fluid className="p-0 m-0 " style={{overflowX:"hidden"}}>
      <CustomScrollbar style={{height: "100vh", width: "100vw", }}>
      <BrowserRouter>
      <TopNav openSideNav={openSideNav} display={display}/>
      {/* <Row className="m-0 p-0 sticky-top header-background text-nowrap justify-content-left align-items-center">
      <Col sm={2} className=" col-2 sideNavButton text-left" onClick={e => openSideNav()}>      
    <i className="bi bi-list" ></i>
      </Col>
      <Col sm={8} className="justify-content-center align-items-center align-center text-center p-0 m-0 col-8">
      </Col>
      <Col className="col-2"></Col>
    </Row> */}
    <SideNav closeSideNav={closeSideNav} wid={wid}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </CustomScrollbar>
    </Container>
  );
}

export default App;
