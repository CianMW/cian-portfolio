import { Button, Col } from "react-bootstrap"
import { Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./landingPageStyle.css"


const Landing = () => {


    return (
      <Container className="landing-page-container align-items-center justify-content-center">
        <Row className="justify-content-center align-items-center" style={{height:"100vh"}}>
          <Col md={2} className=" d-flex text-nowrap justify-content-center align-items-center">
            <div>
            <Link to="/corporate">
        <Button>Commercial Work</Button>
            </Link>
            </div>
          </Col>
          <Col md={2} className="d-flex text-nowrap justify-content-center align-items-center">
            <Link to="/portfolio">
        <Button>Portfolio</Button>
            </Link>
        </Col>
        </Row>
      </Container>
    )
}

export default Landing