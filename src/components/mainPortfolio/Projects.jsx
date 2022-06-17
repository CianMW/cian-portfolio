import { Col, Row } from "react-bootstrap";

const Projects = ({isChecked}) => {
  return (
    <>
      <Row className="my-5">
        <Col className="m-0 col-12">
          <Row className="mb-3">
            <Col className="col-4 justify-content-center">
              <a id="project_section">
                <h1 className="text-center text-nowrap">
                  My Recent Works
                  <div className="main" style={{ height: "3px" }}></div>
                </h1>
              </a>
            </Col>
          </Row>
          <Row className="mt-5">
            {/* First Project */}

            <Col className="col-12 col-md-6">
              <Row>
                <div className="relative-wrapper">
                  <div className="OFSD">
                    <div className="SWSH">
                      <picture className="PTJPG">
                        <img
                          className="BIIJPG weather-at"
                          alt="pic"
                          src="/projects/weather-at-background.png"
                          />
                        <div className="SOTD"></div>
                      </picture>
                      <img className="BIFTF weather" src="/projects/mobile-device-weather-at.png" />
                      <span className={`image-text text-nowrap ${!isChecked && "light"}`}>Weather @</span>

                      <a
                        className="site-link"
                        href="http://weather-at.herokuapp.com/"
                        target="_blank"
                        ></a>
                    </div>
                  </div>
                </div>
              </Row>
              <Row className="mt-3">
                <p>
                  A weather application developed with a mobile first focus. The
                  application allows for searching by location or by geolocation
                  with the last location persisting for the next use.{" "}
                </p>
                <Col className="col-12 col-md-6">
                  <h3 className="text-center">
                    <span className="highlighted">source: </span>
                    <a
                      target="_blank"
                      href="https://github.com/CianMW/weather-At"
                    >
                      <i class="unstyled bi bi-code-slash"></i>
                    </a>
                  </h3>
                </Col>
                <Col className="col-12 col-md-6"></Col>
                <p className="highlighted">
                  Typescript, React, Bootstrap 5, Redux, Thunk, Redux-persist{" "}
                </p>
              </Row>
            </Col>

            {/* Second Project */}

            <Col className="col-12 col-md-6">
              <Row>
                <div className="relative-wrapper">
                  <div className="OFSD">
                    <div className="SWSH">
                      <picture className="PTJPG">
                        <img
                          className="BIIJPG linkedin-clone"
                          alt="pic"
                          src="/projects/linkedin-background.png"
                        />
                        <div className="SOTD"></div>
                      </picture>
                      <img className="BIFTF" src="/projects/linkedin-clone-image.png" />
                      <span className="image-text-linkedin-top text-nowrap">LinkedIn</span>
                      <span className="image-text-linkedin-bottom text-nowrap">Clone</span>

                      <a
                        className="site-link"
                        href="https://linkedin-clone-aug.herokuapp.com/"
                        target="_blank"
                      ></a>
                    </div>
                  </div>
                </div>
              </Row>
              <Row className="mt-3">
                <p>
                  A full clone of LinkedIn created as part of a team, the clone
                  is comprised of a front end built with javascript, react and
                  bootstrap and a back end server built with Node.js, Express.js
                  and MongoDB. Includes OAuth verification and real-time posting.
                </p>
                <Col className="justify-content-center col-12 col-md-6">
                  <h3 className="text-center">
                    <span className="highlighted">Front End: </span>
                    <a
                      target="_blank"
                      href="https://github.com/CianMW/linkedin-fe"
                    >
                      <i className="unstyled bi bi-github"></i>
                    </a>
                  </h3>
                </Col>
                <Col className="justify-content-center col-12 col-md-6">
                  <h3 className="text-center">
                    <span className="highlighted">Back End: </span>
                    <a
                      target="_blank"
                      href="https://github.com/Mo-Xiyad/linkedIn-back-end"
                    >
                      <i className="unstyled bi bi-github"></i>
                    </a>
                  </h3>
                </Col>
                <p className="highlighted">
                  Javascript, React, Node.js, Express.js, MongoDB, Bootstrap,
                  OAuth 2.0{" "}
                </p>
              </Row>
            </Col>

            {/* Third Project */}
            <Col className="d-none d-md-block col-3"></Col>
            <Col className="col-12 col-lg-6">
              <Row>
                <div className="relative-wrapper">
                  <div className="OFSD">
                    <div className="SWSH rounded">
                      <picture className="PTJPG">
                        <img
                          className="BIIJPG odyssey-vtt"
                          alt="pic"
                          src="https://i.ibb.co/s3rGV80/500-500-px.png"
                        />
                        <div className="SOTD"></div>
                      </picture>
                      <img className="BIFTF" src="https://i.ibb.co/WktP2gK/space-aces-tablet.png" />
                      <span className={`image-text-odyssey-left ${!isChecked && "light"} text-nowrap`}>Odyssey</span>
                      <img className="sword" src="/projects/odyssey-sword.png" height="50px" />
                      <span className={`image-text-odyssey-right ${!isChecked && "light"} text-nowrap`}>VTT</span>

                      <a
                        className="site-link"
                        href="https://odyssey-space-aces-fe.vercel.app/"
                        target="_blank"
                      ></a>
                    </div>
                  </div>
                </div>
              </Row>
              <Row className="mt-3">
                <p>
                  A digital implementation of the role playing game Space Aces. Odyssey vtt is a digital tabletop where players
                  can come together and play using the rule set, generators, characters and creatures.
                </p>
                <p>
                  The front end is built with Javascript, React, bootstrap, 3JS and
                  socket IO.
                </p>
                <p>
                  The back end is built using Express.js, Socket IO and MongoDB.
                </p>
                <Col className="justify-content-center col-12 col-md-6">
                  <h3 className="text-center">
                    <span className="highlighted">Front End: </span>
                    <a
                      target="_blank"
                      href="https://github.com/CianMW/odyssey-vtt-fe"
                    >
                      <i className="unstyled bi bi-github"></i>
                    </a>
                  </h3>
                </Col>
                <Col className="justify-content-center col-12 col-md-6">
                  <h3 className="text-center">
                    <span className="highlighted">Back End: </span>
                    <a
                      target="_blank"
                      href="https://github.com/CianMW/odyssey-vtt-be"
                    >
                      <i className="unstyled bi bi-github"></i>
                    </a>
                  </h3>
                </Col>
                <p className="highlighted">
                  Javascript, React, Node.js, Socket IO, Express.js, MongoDB,
                  Bootstrap{" "}
                </p>
              </Row>
            </Col>
            <Col className="d-none d-md-block col-3"></Col>

            {/* <Col className="col-12 col-lg-4">
                    </Col> */}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Projects;
