import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";



const CommerceWorkContainer = () => {
return(
    <Container className="m-0 p-0 my-3 text-center">
        <Row className="t-cont">
        <h3 className="text-center">Bellow you'll find some sample sites with a mixture of styles and designs</h3>
        </Row>
        <Row>
            <Col>
            <Link to="/sampleBakery">
            <Button>Bakery</Button>
            </Link>
            </Col>
        </Row>
    </Container>
)
}


export default CommerceWorkContainer;