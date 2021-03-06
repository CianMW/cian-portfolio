import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CradleLoader from "../Loader";
import AboutSection from "./AboutSection";
import ContactFooter from "./ContactFooter";
import DayNightToggle from "./DayNightToggle";
import Projects from "./Projects";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

const Home = () => {
  const [load, setLoad] = useState("true");
  const [wid, setWid] = useState("closed");
  const [display, setDisplay] = useState("block");
  const [isChecked, setIsChecked] = useState(true);
  useEffect(() => {
    setTimeout(() => {
       setLoad("false");
       setTimeout(() => {
         setLoad("false none");
       }, 1000);
    }, 1500);
  }, [])

  const openSideNav = () => {
    setWid("open")
    setDisplay("none")
 }

  const closeSideNav = () => {
    setWid("closed")
    setDisplay("block")

    // setAnimation("")
 }
  const checkClosedNav = () => {
    if (wid === "open"){
      setWid("closed")
      setDisplay("block")
    }

    // setAnimation("")
 }

 const windowWidth = window.innerWidth;

 
  return (
    <Container className={`pt-0 d-flex full-cover ${!isChecked && "day"} justify-content-center`}>
        <CradleLoader display={load}/>
        <TopNav isChecked={isChecked} openSideNav={openSideNav} display={display}/>
        <SideNav windowWidth={windowWidth} isChecked={isChecked} setIsChecked={setIsChecked} closeSideNav={closeSideNav} wid={wid}/>
        {windowWidth > 768 && 
        <DayNightToggle isChecked={isChecked} setIsChecked={setIsChecked}/>
        }
      <Row onClick={e => checkClosedNav()}className="p-2 m-0 parent-width">
        <Col className="col-1 p-0"></Col>
        <Col className="col-10 p-0 justify-content-center">
          <div className="outers">
            <div className={`main ${isChecked ? "mainShadow": "mainBlockColor"}`}>
              <Row className="p-0">
                <a id="home-sectionf"></a>
                <Col className="col-12 p-0 text-center ">
                  <p className="m-0 d-none d-md-block">
                    <span className="main-text solid-font">Hello, I'm </span>
                    <span className={`text-center main-text main-title ${isChecked ? "dark" : "light"}`}>
                        Cian Markwick   
                    </span>
                  </p>
                  <div className="m-0 d-flex justify-content-around align-items-center ">
                      <Row className="text-center">
                          <Col className="col-12 d-md-none text-md-nowrap">
                        <span className={`text-center main-text main-title ${isChecked ? "dark" : "light"}`}>
                        Cian Markwick   
                        </span>
                          </Col>
                          <Col className="col-12 p-0 m-0">
                        <span className={`fw-bold align-bottomn job-title text-wrap ${isChecked ? "dark" : "light"}`}>
                        Full Stack Developer
                        </span>
                          </Col>
                      </Row>
                  </div>
                </Col>
              </Row> 
            </div>

              {/* insert content here */}
             <Row className=" m-0 p-0 mt-5">

              {/*   About me section */}
            <AboutSection isChecked={isChecked}/>

              {/* Recent Works section */}
             <Projects/>


              {/* third section */}
              <Row></Row>

              </Row>     


              {/* end of home page content */}



          </div>
    <ContactFooter isChecked={isChecked}/>
        </Col>
        <Col className="col-1 p-0"></Col>
      </Row> 
    </Container>
  );
};

export default Home;
