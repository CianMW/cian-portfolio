import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/mainPortfolio/Home';
import { Container } from 'react-bootstrap';
import CustomScrollbar from './components/mainPortfolio/CustomScrollbar';
import './App.css';
import Landing from './components/Landing';
import CorporateHome from './components/corporate/CorporateHome';
import BakerySample from './components/bakerySample/BakerySample';


function App() {




  return (
    <Container fluid className="p-0 m-0 siteContainer" style={{overflowX:"hidden"}}>
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
