import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"





const AboutSection = ({isChecked}) => {

return (
                <Row id="about_section" className="mb-5 m-0 p-0">
                <Col className="m-0 col-12">
                  <Row className="mb-3">
                    <Col className="col-4 justify-content-center">
                <a id="about_section">

                 <h1 className="text-center text-nowrap">About Me
                 <div className="main-2" style={{height:"3px"}}></div>
                 </h1>
                </a>
                   </Col> 
                 </Row>


    <Row>
    <Row className={`main-2 m-0 p-0 align-items-center ${isChecked ? "main-2-shadow": "main-2-blockColor"}`} >

        <Col className="col-12 col-sm-6 justify-content-center text-center align-text-center  py-2">
        <p className="align-text-center">I am Cian Markwick a web developer from Ireland, now based in Glasgow Scotland I am especially passionate about the <span className="boldened">digitization of interactive media, mobile first development and human centric design</span>. My best tools include <span className="boldened">Javascrtipt, Express, Node, React, Typescript and MongoDB</span>.</p>
        <p className="d-none d-sm-block">What do I do? <span className="boldened">I solve problems, puzzles and challenges</span> and I really enjoy it! In my work I'm consistently pushing to achieve more <span className="boldened">effective design</span> while always adding an artistic flair.  </p>
        </Col>
        <Col className="col-12 col-sm-6 p-2 justify-content-center">
            <div>
            <img className={`rounded cian-self ${isChecked && "c-glow"}`} src="https://i.ibb.co/hcVmTqQ/Optimized-cian-neon.jpg" />
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