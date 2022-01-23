import { Link } from "react-router-dom";

const SideNav = ({wid, closeSideNav}) => {
    return (
    <div className="sidenav d-flex align-items-center" style={{width: wid}} >
        <div  className="sideNavButton " onClick={closeSideNav} >

        <i className="bi bi-list" ></i>
        </div>
        {/* <button onClick={closeSideNav}>X</button> */}
        <Link to="/">
        <span>Home</span>
        </Link>
        <Link to="/">
        <span>Portfolio</span>
        </Link>
        <Link to="/">
        <span>Contact Me</span>
        </Link>
        <Link to="/">
        <span>About</span>
        </Link>

    </div>
     )
    };
export default SideNav;