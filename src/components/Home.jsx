import { Col, Container, Row } from "react-bootstrap";
import AboutSection from "./AboutSection";
import ContactFooter from "./ContactFooter";
import Projects from "./Projects";

const Home = () => {
  return (
    <Container className="pt-0  d-flex full-cover justify-content-center">
      <Row className="p-2 m-0 parent-width">
        <Col className="col-1 p-0"></Col>
        <Col className="col-10 p-0 justify-content-center">
          <div className="outers">
            <div className="main">
              <Row className="p-0">
                <a id="home-section"></a>
                <Col className="col-12 p-0 text-center ">
                  <p className="m-0 d-none d-md-block">
                    <span className="main-text solid-font">Hello, I'm </span>
                    <span className="text-center main-text main-title ">
                        Cian Markwick   
                        </span>
                  </p>
                  <div className="m-0 d-flex justify-content-around align-items-center ">
                      <Row className="text-center">
                          <Col className="col-12 d-md-none text-md-nowrap">
                        <span className="text-center main-text main-title">
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
              </Row> 
            </div>

              {/* insert content here */}
             <Row className="mt-5">

              {/*   About me section */}
            <AboutSection/>

              {/* Recent Works section */}
             <Projects/>


              {/* third section */}
              <Row></Row>

              </Row>     


              {/* end of home page content */}



          </div>
    <ContactFooter/>
        </Col>
        <Col className="col-1 p-0"></Col>
      </Row> 
    </Container>
  );
};

export default Home;
