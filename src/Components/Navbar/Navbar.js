import React, { useState } from 'react'
import "./Navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Modal } from 'react-bootstrap';
import webLogo from "../../assets/pictures/Elevonix Tech Logo Bg Remove Editied.png"

const NavbarTop = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggle = (isOpen) => {
    setIsDropdownOpen(isOpen);
  };
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
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
              <NavDropdown.Item href="#" onClick={handleShow} className='navlink_dropdown_a'>Services</NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={handleShow} className='navlink_dropdown_a'>
                Blog
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={handleShow} className='navlink_dropdown_a'>Contact</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="#" className='navlink_a px-lg-4' onClick={handleShow}>Why Elevonix</Nav.Link>
            <Nav.Link href="#" className='navlink_a px-lg-4' onClick={handleShow}>Services</Nav.Link>
            <Nav.Link href="#" className='navlink_a px-lg-4' onClick={handleShow}>Blog</Nav.Link>
            <Nav.Link href="#" className='navlink_a px-lg-4' onClick={handleShow}>Contact</Nav.Link>
            </div>
            <div className='d-flex justify-content-end w-25'>
            <button type='button' className='btn schedule_consultation_btn' onClick={handleShow} style={{cursor:"pointer"}}>Schedule a Consultation</button>
            </div>
             {/* Bootstrap Modal */}
         <Modal show={show} onHide={handleClose} centered dialogClassName="custom-modal">
        <Modal.Body className="custom-modal-body">
          <div className="modal-content-wrapper">
            <h2 className="modal-title">✨ Something New is Coming! ✨</h2>
            <p className="modal-text">
              🚀 We're working on an exciting new feature. Stay tuned!
            </p>
            <Button variant="light" className="close-button" onClick={handleClose}>
              Got It!
            </Button>
          </div>
        </Modal.Body>
      </Modal>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarTop;
