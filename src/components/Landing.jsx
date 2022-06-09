import { useEffect, useState } from "react"
import { Button, Col } from "react-bootstrap"
import { Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./landingPageStyle.css"
import CradleLoader from "./Loader"
import NormalIntro from "./mainPortfolio/NormalIntro"
import PerspectiveIntro from "./PerspectiveIntro"


const Landing = () => {
  const [load, setLoad] = useState("true");
   useEffect(() => {
     setTimeout(() => {
        setLoad("false");
        setTimeout(() => {
          setLoad("false none");
        }, 1000);
     }, 1500);
   }, [])

   const windowWidth = window.innerWidth

       return (
      <Container className="landing-page-container align-items-center justify-content-center" >
        <CradleLoader display={load}/>
        <Row style={{overflow:"visible"}}>
          <h5 className="text-left mt-2 ml-2 designerName">Cian Markwick</h5>
         {windowWidth > 650 ? <PerspectiveIntro/> : <NormalIntro/>}
        </Row>
        <Row className="justify-content-center align-items-center" style={{height:"100vh"}}>
          <Col md={3} className="d-flex text-nowrap justify-content-center align-items-center">
            <div>
            <Link to="/corporate">
<button class="custom-btn btn-15">Commercial Work</button>
            </Link>
            </div>
          </Col>
          <Col md={3} className="d-flex text-nowrap justify-content-center align-items-center">
            <Link to="/portfolio">
<button class="custom-btn btn-16">Portfolio</button>
            </Link>
        </Col>
        </Row>
      </Container>
    )
}


export default Landing