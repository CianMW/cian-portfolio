import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";



const CommerceWorkContainer = () => {
return(
    <Container className="m-0 p-0 my-3 text-center">
        <Row className="t-cont">
        <h3 className="text-center">Bellow you'll find some sample sites with a mixture of styles and designs</h3>
        </Row>
        <Row className="mt-3">
            <Col sm={6} className="text-center">
                <h2>Loaven Bakery</h2>
           <p>A single page site for a bakery, including a responsive sidebar, interactive menu and a contact form.</p>
            </Col>
            <Col sm={3}>
            <Link to="/sampleBakery">
            <img src="https://i.ibb.co/W5V1Ryr/webpage-Screenshot.jpg" alt="bakery logo" style={{width:"100%"}}/>
            </Link>
            </Col>
            <Col sm={3} className="mt-md-0 mt-3">
            <Link to="/sampleBakery">
            <img src="https://i.ibb.co/rkVk1RW/website-Screenshot2.jpg" alt="bakery logo" style={{width:"100%"}}/>
            </Link>
            </Col>
        </Row>
    </Container>
)
}


export default CommerceWorkContainer;