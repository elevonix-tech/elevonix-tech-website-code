import React, { useState } from 'react'
import "./Navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import webLogo from "../../assets/pictures/Elevonix Tech Logo Bg Remove Editied.png"

const NavbarTop = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggle = (isOpen) => {
    setIsDropdownOpen(isOpen);
  };
  return (
    <div>
      <Navbar expand="lg" className="py-3">
      <Container fluid className='mx-lg-5'>
        <Navbar.Brand href="/" className='web-logo text-white'>
          <img src={webLogo} className='web_logo_height'></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100">
            <div className='d-flex w-100 justify-content-center'>
            <NavDropdown className='navlink_a' title="Solutions" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className='navlink_dropdown_a'>Services</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='navlink_dropdown_a'>
                Blog
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='navlink_dropdown_a'>Contact</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="#home" className='navlink_a px-lg-4'>Why Elevonix</Nav.Link>
            <Nav.Link href="#home" className='navlink_a px-lg-4'>Services</Nav.Link>
            <Nav.Link href="#link" className='navlink_a px-lg-4'>Blog</Nav.Link>
            <Nav.Link href="#link" className='navlink_a px-lg-4'>Contact</Nav.Link>
            </div>
            <div className='d-flex justify-content-end w-25'>
            <button type='button' className='btn schedule_consultation_btn'>Schedule a Consultation</button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarTop;
