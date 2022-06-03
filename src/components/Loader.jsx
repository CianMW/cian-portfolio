import { Col, Row } from "react-bootstrap";

const CradleLoader = (props) => {
  return (
      <div id="cradleContainer" className={props.display}>
    <div id="loader-5">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <h2 style={{color:"black"}}>Loading</h2>
      </div>
  );
};

export default CradleLoader;
