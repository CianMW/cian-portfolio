import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/mainPortfolio/Home';
import SideNav from './components/mainPortfolio/SideNav';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import CustomScrollbar from './components/mainPortfolio/CustomScrollbar';
import TopNav from './components/mainPortfolio/TopNav';
import './App.css';
import Landing from './components/Landing';
import CorporateHome from './components/corporate/CorporateHome';
import BakerySample from './components/bakerySample/BakerySample';


function App() {




  return (
    <Container fluid className="p-0 m-0 " style={{overflowX:"hidden"}}>
      <CustomScrollbar style={{height: "100vh", width: "100vw", }}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/corporate" element={<CorporateHome/>}/>
        <Route path="/portfolio" element={<Home/>}/>
        <Route path="/sampleBakery" element={<BakerySample/>}/>
      </Routes>
      </BrowserRouter>
    </CustomScrollbar>
    </Container>
  );
}

export default App;
