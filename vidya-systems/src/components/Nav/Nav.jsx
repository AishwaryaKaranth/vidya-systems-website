import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from 'react-bootstrap';
import Dropdown from 'react-multilevel-dropdown';
import styles from "./Nav.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation=()=>{
    return(
        <Navbar collapseOnSelect expand="lg" className={styles["color-nav"]}>
            <Container className={styles["container"]}>
            <Navbar.Brand href="#home"><span className={styles["link"]}>Vidya Systems</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className={styles["me-auto"]}>
                    <Nav.Link href="#about-us"><span className={styles["link"]}>About Us</span></Nav.Link>
                    <NavDropdown title="Dropdown" id={styles["basic-nav-dropdown"]}>
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#about-us"><span className={styles["link"]}>FAQ</span></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>   
    )
    
}

export default Navigation;