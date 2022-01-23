import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="pt-0  d-flex full-cover justify-content-center">
      <Row className="p-2 parent-width">
        <Col className="col-1 p-0"></Col>
        <Col className="col-10 p-0 justify-content-center">
          <div className="outers">
            <div className="main">
              {/* insert content here */}
              <Row className="p-0">
                <Col className="col-8 p-0 text-center ">
                  <p className="m-0 d-none d-md-block">
                    <span className="main-text solid-font">Hello, I'm </span>
                    <span className="text-center main-text main-title ">
                        Cian Markwick   
                        </span>
                  </p>
                  <div className="m-0 d-flex justify-content-around align-items-center ">
                      <Row className="text-center">
                          <Col className="col-12 d-md-none text-md-nowrap">
                        <span className="text-center main-text main-title ">
                        Cian Markwick   
                        </span>
                          </Col>
                          <Col className="col-12 p-0 m-0">
                        <span className="fw-bold align-bottomn job-title text-wrap">
                        Full Stack Developer
                        </span>
                          </Col>
                      </Row>
                  </div>
                </Col>
                <Col className="col-4">
                    <img src="/cian-self.jpg" className="sized"/>
                </Col>
              </Row>
              {/* end of home page content */}
            </div>
          </div>
        </Col>
        <Col className="col-1 p-0"></Col>
      </Row>
    </Container>
  );
};

export default Home;
