import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import { Row, Col } from "react-bootstrap"
import Icon from "../Icon";
import { MDBBtn, MDBIcon } from "mdbreact";
import "./style.css";

const Footer = () => {
  return (
    <MDBFooter className="font-small footer">
      <MDBContainer fluid className="text-center">
         <Row>
            <Col sm={12}>
              <div className="social-buttons">
                <MDBBtn floating outline={true} href="..." target="_blank"  className="contact-button"><MDBIcon fab icon="github"/></MDBBtn>
                <MDBBtn floating outline={true} href="..." target="_blank" className="contact-button"><MDBIcon fab icon="facebook-f" /></MDBBtn>
                <MDBBtn floating outline={true} href="..." target="_blank" className="contact-button"><MDBIcon fab icon="linkedin-in" /></MDBBtn>
                <MDBBtn floating outline={true} href="..." target="_blank" className="contact-button"><MDBIcon fab icon="instagram"/></MDBBtn>
              </div>
            </Col>
        </Row>
      </MDBContainer>
      <div className="footer-copyright text-center py-2">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a>Domain Here</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;

