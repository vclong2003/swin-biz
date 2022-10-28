import React from "react";
import styles from "./style.module.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import { Button } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <Navbar variant="light" expand="lg" sticky="top" className={styles.navBar}>
      <Navbar.Brand href="/" className={styles.logo}>
        FINDYOURMAPLE
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={styles.navColapse}>
        <Nav className="me-auto">
          <Nav.Link href="/mbtitest" className={styles.navLink}>
            Personality Test
          </Nav.Link>
          <Nav.Link href="/review" className={styles.navLink}>
            Review
          </Nav.Link>
          <Nav.Link href="#" className={styles.navLink}>
            Workspace
          </Nav.Link>
          <Nav.Link href="/premiumpackage" className={styles.navLink}>
            Mentoring{" "}
            <Badge pill bg="warning" text="dark">
              Premium
            </Badge>
          </Nav.Link>
          <Button className={styles.authBtn}>Login/Register</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
