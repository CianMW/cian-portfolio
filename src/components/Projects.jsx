import { Col, Row } from "react-bootstrap"



const Projects = () => {


    return(
        <>
             <Row className="mb-5">
                <Col className="m-0 col-12">
                  <Row className="mb-3">
                    <Col className="col-4 justify-content-center">

                  <h1 className="text-center text-nowrap">My Recent Works

                  <div className="main" style={{height:"3px"}}></div>
                  </h1>
                    </Col> 
                  </Row>
                  <Row >
                    {/* First Project */}

                    <Col className="col-12 col-lg-6">
                      <a target="_blank" href="http://weather-at.herokuapp.com/">
                      <div className="outer-image">
                        <picture className="picture-container d-flex justify-content-center">
                          <div className="shadow-div"> 
                          <img className="inner-image"  height="500px" alt="pic" src="/projects/Weather-at-logo.png"/>
                          </div>
                        </picture>
                      </div>
                      </a>
                      <Row className="mt-3">
                      <h2 className="text-center fw-bold">Weather @</h2>
                        <p>A weather application developed with a mobile first focus. The application allows for searching by location or by geolocation with the last location persisting for the next use. </p>
                        <Col className="col-12 col-md-6">
                        <h3 className="text-center"><span className="highlighted">Code:  </span><a target="_blank" href="https://github.com/CianMW/weather-At"><i className="unstyled bi bi-github"></i></a></h3>
                        </Col>
                        <Col className="col-12 col-md-6"></Col>
                        <p className="highlighted">Typescript, React, Bootstrap 5, Redux, Thunk, Redux-persist </p>
                      </Row>
                    </Col>

                    {/* Second Project */}

                    <Col className="col-12 col-lg-6">
                      <a target="_blank" href="http://weather-at.herokuapp.com/">
                      <div className="outer-image">
                        <picture className="picture-container">
                          <div className="shadow-div"> 
                          <img className="inner-image"  alt="pic" src="/projects/linkedin-screen-cap.png"/>
                          </div>
                        </picture>
                      </div>
                      </a>
                      <Row className="mt-3">
                      <h2 className="text-center">LinkedIn Clone</h2>
                        <p>A full clone of LinkedIn created as part of a team, the clone is comprised of a front end built with javascript, react and bootstrap and a back end server built with Node.js, Express.js and MongoDB.
                          Includes a main menu.
                        </p>
                        <Col className="justify-content-center col-12 col-md-6">
                          <h3 className="text-center"><span className="highlighted">Front End:  </span><a target="_blank" href="https://github.com/CianMW/linkedin-fe"><i className="unstyled bi bi-github"></i></a></h3>
                          </Col>
                        <Col className="justify-content-center col-12 col-md-6">
                          <h3 className="text-center"><span className="highlighted">Back End:  </span><a target="_blank" href="https://github.com/Mo-Xiyad/linkedIn-back-end"><i className="unstyled bi bi-github"></i></a></h3>
                          </Col>
                        <p className="highlighted">Javascript, React, Node.js, Express.js, MongoDB, Bootstrap, OAuth 2.0  </p>
                      </Row>

                    </Col>

                    {/* Third Project */}
                    <Col className="d-none d-md-block col-3"></Col>
                    <Col className="col-12 col-lg-6">
                      <a target="_blank" href="http://weather-at.herokuapp.com/">
                      <div className="outer-image">
                        <picture className="picture-container">
                          <div className="shadow-div"> 
                          <img className="rounded inner-image"  alt="pic" src="/projects/Odyssey-vtt-logo-new.png"/>
                          </div>
                        </picture>
                      </div>
                      </a>
                      <Row className="mt-3">
                      <span className="text-center text-nowrap"> <h2 className="d-inline-block">Odyssey</h2> Virtual Tabletop</span>
                        <p>A virtual tabletop with a focus on Old-school Revival games and indie developer support. A digital table where players camn come together 
                        </p>
                        <Col className="justify-content-center col-12 col-md-6">
                          <h3 className="text-center"><span className="highlighted">Front End:  </span><a target="_blank" href="https://github.com/CianMW/odyssey-vtt-fe"><i className="unstyled bi bi-github"></i></a></h3>
                          </Col>
                        <Col className="justify-content-center col-12 col-md-6">
                          <h3 className="text-center"><span className="highlighted">Back End:  </span><a target="_blank" href="https://github.com/CianMW/odyssey-vtt-be"><i className="unstyled bi bi-github"></i></a></h3>
                          </Col>
                        <p className="highlighted">Javascript, React, Node.js, Socket IO, Express.js, MongoDB, Bootstrap  </p>
                      </Row>

                    </Col>
                    <Col className="d-none d-md-block col-3"></Col>

                    {/* <Col className="col-12 col-lg-4">
                    </Col> */}
                  </Row>

                </Col>
              </Row>
        </>
    )
}


export default Projects