import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";
import Dropdown from 'react-multilevel-dropdown';
import styles from "./Nav.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation=()=>{
    return(
        <Navbar collapseOnSelect expand="lg" className={styles["color-nav"]}>
            <Container className={styles["container"]}>
                <LinkContainer to="/">
                    <Navbar.Brand href="#home"><span className={styles["link"]}>Vidya Systems</span></Navbar.Brand>
                </LinkContainer>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles["responsive-nav"]}/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className={styles["me-auto"]}>
                    <LinkContainer to="/about">
                    <   Nav.Link><span className={styles["link"]}>About Us</span></Nav.Link>
                    </LinkContainer>
                    
                    <NavDropdown title="Distance Education" id={styles["basic-nav-dropdown"]}>
                        <NavDropdown title="GITAM University" className={styles["dropdown-title"]}>
                            <LinkContainer to="/gitamUG">
                                <NavDropdown.Item className={styles["dropdown-title"]}>UG</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/gitamPG">
                                <NavDropdown.Item className={styles["dropdown-title"]}>PG</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        <NavDropdown title="SVGU" className={styles["dropdown-title"]}>
                            <LinkContainer to="/svguUG">
                                <NavDropdown.Item className={styles["dropdown-title"]}>UG</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/svguPG">
                                <NavDropdown.Item className={styles["dropdown-title"]}>PG</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    </NavDropdown>
                    <LinkContainer to="/faq">
                        <Nav.Link><span className={styles["link"]}>FAQ</span></Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                        <Nav.Link><span className={styles["link"]}>Contact</span></Nav.Link>
                    </LinkContainer>
                    
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>   
    )
}

export default Navigation;