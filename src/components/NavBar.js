import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/DAT-Solutions-Logo.svg/1280px-DAT-Solutions-Logo.svg.png"} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#languages" className={activeLink === 'languages' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('languages')}>Languages</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/biahudaom"><img src={"https://github.githubassets.com/images/modules/logos_page/Octocat.png"} alt="Icon" /></a>
                <a href="https://www.linkedin.com/in/kim-%C4%91%E1%BA%A1t-030102253/"><img src={navIcon1} alt="LinkedIn" /></a>
                <a href="https://www.facebook.com/biahudaom"><img src={navIcon2} alt="Facebook" /></a>
                <a href="https://www.instagram.com/beerne._/"><img src={navIcon3} alt="Instagram" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Contact Me</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
