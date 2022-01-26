import { Col, Container, Row } from "react-bootstrap";

const ContactFooter = () => {
  return (
    <Row className="p-0 my-3 footer sticky-bottom">
      <Row className="mb-3">
        <Col className="col-lg-6 col-8 col-md-8 justify-content-center">
          <h1 className="text-center text-nowrap">
            Want to get in touch?
            <div className="main-3" style={{ height: "3px" }}></div>
          </h1>
        </Col>
      </Row>
      <Row className="p-md-5 p-2 main-3">

      <Col className="col-md-6 col-4 justify-content-center  text-nowrap">
          <h1 className="text-center text-middle">
     <a className="unstyled text-center" target="_blank" href="https://github.com/CianMW">
      <i class="p-2 bi bi-github"></i>
     </a>
     <a className="unstyled" target="_blank" href="https://www.linkedin.com/in/cian-markwick-002848141/">
      <i class="p-2 bi bi-linkedin" ></i>
     </a>
     <a className="unstyled" target="_blank">
      <i class="p-2 bi bi-facebook"></i>
     </a>
          </h1>
      </Col>
      <Col className="col-8 col-md-6 align-items-center">
          <div className="d-flex justify-content-around align-items-center">

          <h1 className="text-center align-bottom d-flex d-inline-block">
            email:
          </h1>
             <span className="mr-2 align-bottom email mb-0">   markwick.cian@gmail.com</span>
          </div>
      </Col>
      </Row>
    </Row>
  );
};

export default ContactFooter;
