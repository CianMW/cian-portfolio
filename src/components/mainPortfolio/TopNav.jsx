import { Col, Row } from "react-bootstrap"
import React,{ useState } from "react"

const TopNav = ({isChecked, openSideNav, display}) => {

 return(   
    <Row className="m-0 p-0 sticky-top header-background  text-nowrap justify-content-left align-items-center" style={{display:display,}}>
<Col sm={2} className=" col-2 sideNavButton text-left" onClick={e => openSideNav()}>      
<i className={`unstyled bi bi-list ${isChecked ? "dark" : "light"}`} ></i>
</Col>
<Col sm={8} className="justify-content-center align-items-center align-center text-center p-0 m-0 col-8">
</Col>
<Col className="col-2">
</Col>
</Row>

)
}

export default TopNav