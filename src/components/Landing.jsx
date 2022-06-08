import { useEffect, useState } from "react"
import { Button, Col } from "react-bootstrap"
import { Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./landingPageStyle.css"
import CradleLoader from "./Loader"


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
       return (
      <Container className="landing-page-container align-items-center justify-content-center" >
        <CradleLoader display={load}/>
        <Row>
          <h5 className="text-left mt-2 ml-2 designerName">Cian Markwick</h5>
          <div className="d-block justify-content-center text-center">
          <div className="landingTitleContainer">
            <span>
              Welcome,
              </span>
            <span>
              I build both the
              </span>
            <span>
              seen & <span className="animTextUnseen">unseen</span>
              </span>
            </div>
          </div>
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