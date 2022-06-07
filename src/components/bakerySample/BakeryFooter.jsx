import { Container, Row } from "react-bootstrap";

const BakeryFooter = () => {
  return (
    <div className="bakeryFooterContainer">
      <p className="bakerySectionTitle">Contact us for any enquiries</p>
      <form class="cf">
        <div class="half left cf">
          <input type="text" id="input-name" placeholder="Name"></input>
          <input
            type="email"
            id="input-email"
            placeholder="Email address"
            ></input>
          <input type="text" id="input-subject" placeholder="Subject"></input>
        </div>
        <div class="half right cf">
          <textarea
            name="message"
            type="text"
            id="input-message"
            placeholder="Message"
            ></textarea>
        </div>
        <button onClick={e => e.preventDefault()} id="bakeryFormSubmit">Submit</button>
      </form>
      </div>
  );
};

export default BakeryFooter;
