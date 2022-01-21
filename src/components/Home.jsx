import { Col, Container, Row } from "react-bootstrap"

const Home = () => {
    
return (
        <Container className="d-flex full-cover justify-content-center">
            <Row className="parent-width">
                <Col className="col-1 background-gold"></Col>
                <Col className="col-10 border-wrap">
                    <div className="main">

                        Main Row
                    </div>
                </Col>
                <Col className="col-1 background-gold"></Col>
            </Row>
        </Container>
    )
}

export default Home