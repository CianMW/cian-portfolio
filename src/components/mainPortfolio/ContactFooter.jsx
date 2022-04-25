import { Button, Col, Container, Row } from "react-bootstrap";

const ContactFooter = () => {
  return (
    <Row id="contact_section" className="p-0 my-3 footer sticky-bottom">
      <Row className="mb-3">
        <Col className="col-lg-6 col-8 col-md-8 justify-content-center">
          <a id="contact_section">

          <h1 className="text-center text-nowrap">
            Want to get in touch?
            <div className="main-3" style={{ height: "3px" }}></div>
          </h1>
          </a>
        </Col>
      </Row>
      <Row className="p-md-5 p-2 main-3">

      <Col className="col-md-6 col-12 justify-content-center  text-nowrap">
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
      <Col className="d-none d-md-2"></Col>
      <Col className="col-8 col-md-4 align-items-center">
          <div className="d-flex justify-content-between align-items-center">

          <h3 className="text-center align-bottom d-flex d-inline-block"><i class="bi bi-envelope-fill"></i></h3>
             <span className="ml-3 align-bottom email mb-0"> markwick.cian@gmail.com</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">

          <h3 className="text-center align-bottom d-flex d-inline-block"> <i class="bi bi-geo-alt-fill"></i></h3>
             <span className="ml-3 align-bottom email mb-0"> Glasgow, Scotland, UK</span>
          </div>
      </Col>
      <Col className="mt-2 mb-0 col-12 align-items-center justify-content-center d-flex">
      <a className="p-height" target="_blank" href="/Cian-Markwick-Web-Developer-CV.pdf">

      <button className="n-button">
        <span className="n-button-text">
        Resume
        </span>
      </button>
      </a>
      </Col>
      </Row>
    </Row>
  );
};

export default ContactFooter;
