import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar expand="md" className={styles.NavBar} fixed="top">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="logo" height={45} />
          <span className="d-none d-md-inline">Star Review</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "200px" }}
            navbarScroll
          >
            <Nav.Link>
              <i className="fa fa-house"></i>Home
            </Nav.Link>
            <Nav.Link>
              <i className="fa fa-sign-in"></i>Sign in
            </Nav.Link>
            <Nav.Link>
              <i className="fa fa-user-plus"></i>Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
