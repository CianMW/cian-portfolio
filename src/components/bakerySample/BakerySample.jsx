import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./bakeryStyle.css";


const BakerySample = () => {


    return (
        <Container className="bakeryContainer">
            <Row className="">
                {/* Side Menu Start */}
                <Col md={2} className="sticky-top d-none d-md-inline-flex bakerySideMenu px-3 m-0">
                    <Row className="p-3">
                    <img className="bakeryLogoImage" src="https://i.ibb.co/crStXGQ/bakery-Logo.png"/>
                    </Row>
                    <div className=" text-center align-middle">
                        <a className="bakeryLink" ><span>Home</span></a>
                        <a className="bakeryLink" ><span>Menu</span></a>
                        <a className="bakeryLink" ><span>Gallery</span></a>
                        <a className="bakeryLink" ><span>About Us</span></a>
                        <a className="bakeryLink" ><span>Contact</span></a>
                    </div>
                    <div className="pt-3 text-center">
                    <p>1 Dunira Close, Newcastle Upon Tyne,NE2 2EL</p>
                    </div>
                </Col>
                {/* Side Menu END */}

                <Col md={10} className="fullWidth p-0 m-0">
                    <Row className="mainBakeryInfoContainer m-0 p-0">
                        <Col className="m-0 p-0" style={{overflowY: "scroll", overflowY: "hidden"}}>
                            {/* First Section START*/}
                            <Row className="m-0 p-0">
                            <img style={{width: "100%", padding: "0px"}} src="https://i.ibb.co/MVRQWbB/Bakery-Cafe-cover.jpg" />
                            </Row>
                            {/* First Section END */}


                            {/* Menu Section Section START*/}
                            <Row className="m-0 p-0">
                                <div className="bakeryMenuContainer">
                                    <div className="leftMenuPanel">
                                        <div className="menuTitle text-center">
                                            <h2>Our Menu</h2>
                                        </div>
                                    </div>
                                    <div className="rightMenuPanel">

                                    </div>
                                </div>
                            </Row>
                            {/* Menu Section Section END*/}

                            <Row className="m-0 p-0">
                            <img style={{width: "100%", padding: "0px"}} src="https://i.ibb.co/MVRQWbB/Bakery-Cafe-cover.jpg" />
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}


export default BakerySample;