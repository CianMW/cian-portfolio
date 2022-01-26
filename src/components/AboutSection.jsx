import { Row, Col } from "react-bootstrap"





const AboutSection = () => {

return (
                <Row className="mb-5 m-0 p-0">
                <Col className="m-0 col-12">
                  <Row className="mb-3">
                    <Col className="col-4 justify-content-center">

                 <h1 className="text-center text-nowrap">About Me
                 <div className="main-2" style={{height:"3px"}}></div>
                 </h1>
                   </Col> 
                 </Row>


    <Row>
    <Row className="main-2 align-items-center" >

        <Col className="col-12 col-sm-6 justify-content-center text-center align-text-center  p-2">
        <p className="align-text-center">I am Cian Markwick a web developer from Ireland, now based in Glasgow Scotland I am especially passionate about the <span className="boldened">digitization of interactive media, mobile first development and human centric design</span>. My best tools include <span className="boldened">Javascrtipt, Express, Node, React, Typescript and MongoDB</span>.</p>
        <p className="d-none d-sm-block">What do I do? <span className="boldened">I solve problems, puzzles and challenges</span> and I really enjoy it! In my work I'm consistently pushing to achieve more <span className="boldened">effective design</span> while always adding an artistic flair.  </p>
        </Col>
        <Col className="col-12 col-sm-6 p-2 justify-content-center">
            <div>
            <img className="rounded cian-self c-glow" src="/cian-neon.png" />
            </div>
        </Col>
        <Col className="col-12 d-sm-none">
            <p>What do I do? <span className="boldened">I solve problems, puzzles and challenges</span> and I really enjoy it! In my work I'm consistently pushing to achieve more <span className="boldened">effective design</span> while always adding an artistic flair.  </p>
        </Col>

    </Row>  
    </Row>


                   </Col>
                   </Row>
)}

export default AboutSection