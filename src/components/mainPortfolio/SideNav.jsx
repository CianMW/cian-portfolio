import { a } from "react-router-dom";
import DayNightToggle from "./DayNightToggle";

const SideNav = ({windowWidth, isChecked ,setIsChecked, wid, closeSideNav}) => {
    return (
    <div className={` ${wid} sidenav d-flex align-it ems-center`}  >
        <div  className="sideNavButton " onClick={closeSideNav} >

        <i className="unstyled bi bi-x"></i>
        </div >
        {/* <button onClick={closeSideNav}>X</button> */}
        <a href="#home-section" className="unstyled text-end" to="/">
        <h2 className="unstyled d-flex text-end">Home</h2>
        </a>
        <a href="#project_section" className="unstyled" to="/">
        <h2 className="unstyled">Portfolio</h2>
        </a>
        <a href="#about_section" className="unstyled" to="/">
        <h2 className="unstyled">About</h2>
        </a>
        <a href="#contact_section" className="unstyled" to="/">
        <h2 className="unstyled">Contact</h2>
        </a>
        {windowWidth < 768 &&
                <DayNightToggle position={"bottom"} isChecked={isChecked} setIsChecked={setIsChecked}/>
        }
    </div>
     )
    };
export default SideNav;