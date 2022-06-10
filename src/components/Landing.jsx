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
          <h5 className="text-left mt-2 ml-2 designerName">Cian Markwick - Full Stack Developer</h5>
         {windowWidth > 650 ? <PerspectiveIntro/> : <NormalIntro/>}
        </Row>
        <Row className="mt-5 pt-5 justify-content-center align-items-center" >
          <Col md={6} className="d-block text-center darkText justify-content-center align-items-center">
            <div>
              <h2 className="fw-bold">Looking to hire a developer?</h2>
            <p className="mt-3">If you're looking to build your company's commercial site, database or web app then have a look at some of my commercial work.</p>
            </div>
            <Row className=" mb-5 justify-content-center align-items-center" >
          <Col md={6} className="d-flex text-nowrap marginAuto justify-content-center align-items-center">
            <div>
            <Link to="/corporate">
          <button class="custom-btn btn-15">Commercial Work</button>
            </Link>
            </div>
          </Col>
          </Row>
          </Col>
          <Col md={6} className="d-block text-center darkText justify-content-center align-items-center">
            <div>
            <h2 className="fw-bold">Want to know more about my skills?</h2>
            <p>Are you a recruiter Wanting to know more about my skills? Please check out my portfolio, feedback is always welcome.</p>
            </div>
            <Row className="justify-content-center align-items-center" >
            <Col md={6} className="d-flex text-nowrap marginAuto justify-content-center align-items-center">
            <div>

            <Link to="/portfolio">
          <button class="custom-btn btn-16">Portfolio</button>
            </Link>
            </div>
        </Col>
        </Row>
        </Col>
        </Row>
      </Container>
    )
}


export default Landing