const SideNav = ({wid, closeSideNav}) => {
    return (
    <div className="sidenav metal radial d-flex justify-content-center align-items-center" style={{width: wid}} >
        <div className="inner-div rounded">

        <div  className="sideNavButton " onClick={closeSideNav} >

        <i className="bi bi-list" ></i>
        </div>
        {/* <button onClick={closeSideNav}>X</button> */}
       <a href="#section">Home</a>
        </div>
    </div>
     )
    };
export default SideNav;