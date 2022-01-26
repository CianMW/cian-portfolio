import { Link } from "react-router-dom";

const SideNav = ({wid, closeSideNav}) => {
    return (
    <div className="sidenav  d-flex align-it ems-center" style={{width: wid}} >
        <div  className="sideNavButton " onClick={closeSideNav} >

        <i className="unstyled bi bi-list" ></i>
        </div >
        {/* <button onClick={closeSideNav}>X</button> */}
        <Link className="unstyled text-end" to="/">
        <h2 className="unstyled d-flex text-end">Home</h2>
        </Link>
        <Link className="unstyled" to="/">
        <h2 className="unstyled">Portfolio</h2>
        </Link>
        <Link className="unstyled" to="/">
        <h2 className="unstyled">About</h2>
        </Link>
        <Link className="unstyled" to="/">
        <h2 className="unstyled">Contact</h2>
        </Link>
    </div>
     )
    };
export default SideNav;