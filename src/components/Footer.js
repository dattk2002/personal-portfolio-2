import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <a href="/"><img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/DAT-Solutions-Logo.svg/1280px-DAT-Solutions-Logo.svg.png"} alt="Logo" /></a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="footer-content">
              <div className="social-icon">
                <a href="https://github.com/biahudaom"><img src={"https://github.githubassets.com/images/modules/logos_page/Octocat.png"} alt="Icon" /></a>
                <a href="https://www.linkedin.com/in/kim-%C4%91%E1%BA%A1t-030102253/"><img src={navIcon1} alt="Icon" fill="white" /></a>
                <a href="https://www.facebook.com/biahudaom"><img src={navIcon2} alt="Icon" /></a>
                <a href="https://www.instagram.com/beerne._/"><img src={navIcon3} alt="Icon" /></a>
              </div>
              <p>Copyright 2022 by BiaHudaOm. All Rights Reserved</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
