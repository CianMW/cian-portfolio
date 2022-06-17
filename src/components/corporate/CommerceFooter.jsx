import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container  from "react-bootstrap/Container";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CommerceFooter = () => {


    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (

      <Container className="m-0 p-0 justify-content-center">
        <Row className="pt-5 justify-content-center">
            <Col md={12} className=" pb-5 text-center align-items-center">
          <h2>Contact</h2>
          <p>
            Please contact us for any questions or inquiries.
          </p>
            </Col>
        </Row>
        <Row className="mb-4 ">
          <div className=" col-lg-6">
            <div className=" shadow bg-light info-box mb-4 ">
              <i className="bx bx-map" />
              <h3>Our Address</h3>
              <p>8 Minto Street, Glasgow, G52 1DN</p>
            </div>
          </div>
          <div className="col-lg-3  col-md-6">
            <div className="info-box shadow bg-light mb-4">
              <i className="bx bx-envelope" />
              <h3>Email Us</h3>
              <p>markwick.cian@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3  col-md-6">
            <div className="info-box shadow bg-light mb-4">
              <i className="bx bx-phone-call" />
              <h3>Call Us</h3>
              <p>+44 7565 403 554</p>
            </div>
          </div>
        </Row>
        {/* <div className="row" data-aos="fade-up" data-aos-delay={100}> */}
        <div className="row">
          <div className="col-lg-6 ">
            <iframe
              className="mb-4 mb-lg-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28027.86540746262!2d-4.327116549877742!3d55.859913148194785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488846100337315d%3A0xd3664ace6aa0cfdd!2s8%20Minto%20St%2C%20Glasgow%20G52%201DN!5e0!3m2!1sen!2suk!4v1651002272398!5m2!1sen!2suk"
              frameBorder={0}
              style={{ border: 0, width: "100%", height: 384 }}

            />
          </div>
          <Col lg={6} className="align-items-between" >
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <Row className="align-items-between">
                <Col className=" pb-2 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required=""
                  />
                </Col>
                <Col className="col form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required=""
                  />
                </Col>
              </Row>
              <Col className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required=""
                />
              </Col>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  required=""
                  defaultValue={""}
                />
               </div>

              <div className="text-center">
                <Button variant="light" type="submit">Send Message</Button>
              </div>
            </form>
          </Col>
        </div>
        <Row  className="text-center align-items-center shadow-sm bg-light align-items-center mt-3 m-0 p-0 commerceFooter">
            <span >
              Webite built by Cian Markwick
            </span>
        </Row>
      </Container>
  );
};

export default CommerceFooter;
