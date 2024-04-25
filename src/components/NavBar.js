import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../App";

function CustomNavLink({ children, to, ...props }) {
  return (
    <NavLink
      to={to}
      {...props}
      className={({ isActive }) =>
        isActive ? `${styles.NavLink} ${styles.Active}` : styles.NavLink
      }
    >
      {children}
    </NavLink>
  );
}

const NavBar = () => {
  const currentUser = useContext(CurrentUserContext);
  const loggedInIcons = <>{currentUser?.username}</>;
  const loggedOutIcons = (
    <>
      <CustomNavLink to="/signin">
        {" "}
        <i className="fa fa-sign-in"></i> Sign in{" "}
      </CustomNavLink>
    </>
  );

  return (
    <Navbar expand="md" className={styles.NavBar} fixed="top">
      <Container fluid>
        <NavLink to="/">
          <Navbar.Brand href="#">
            <img src={logo} alt="logo" height={45} />
            <span className="d-none d-md-inline">Star Review</span>
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "200px" }}
            navbarScroll
          >
            <CustomNavLink to="/">
              <i className="fa fa-house"></i> Home
            </CustomNavLink>
            <CustomNavLink to="/newsletter">
              <i className="fa fa-envelope"></i> Newsletter
            </CustomNavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
