import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../../assets/logo.png";
import styles from "./Nav.module.scss";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = () => {
  return (
    <>
      <div className={styles["header-container"]}>
        <img src={logo} alt="logo"></img>
        <div className={styles["icon-container"]}>
          <div className={styles["icon-inner-container"]}>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:vidyasystems11@gmail.com" target="_blank" rel="noreferrer">info@vidyasystems.in</a>
          </div>
          <div className={styles["icon-inner-container"]}>
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:9341231457" target="_blank" rel="noreferrer">9341231457</a>
          </div>
        </div>
      </div>
      <Navbar collapseOnSelect expand="lg" className={styles["color-nav"]}>
        <Container className={styles["container"]}>
          <LinkContainer to="/">
            <Navbar.Brand href="#home">
              <span className={styles["link"]}>Vidya Systems</span>
            </Navbar.Brand>
          </LinkContainer>
          <span className={styles["responsive-nav"]}>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className={styles["responsive-nav"]}
            />
          </span>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={styles["me-auto"]}>
              <LinkContainer to="/about">
                <Nav.Link>
                  <span className={styles["link"]}>About Us</span>
                </Nav.Link>
              </LinkContainer>

              <NavDropdown
                title="Distance Education"
                id={styles["basic-nav-dropdown"]}
              >
                <NavDropdown
                  title="GITAM University"
                  className={styles["dropdown-title"]}
                >
                  <LinkContainer to="/gitamUG">
                    <NavDropdown.Item className={styles["dropdown-title"]}>
                      UG
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/gitamPG">
                    <NavDropdown.Item className={styles["dropdown-title"]}>
                      PG
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
                <NavDropdown title="SGVU" className={styles["dropdown-title"]}>
                  <LinkContainer to="/svguUG">
                    <NavDropdown.Item className={styles["dropdown-title"]}>
                      UG
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/svguPG">
                    <NavDropdown.Item className={styles["dropdown-title"]}>
                      PG
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </NavDropdown>
              <LinkContainer to="/faq">
                <Nav.Link>
                  <span className={styles["link"]}>FAQ</span>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>
                  <span className={styles["link"]}>Contact</span>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
