import React, { Component } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Logo from "./Icons/logogrupo";

export default class navbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="md" bg="light">
         <Container className="medium"> 
            <Navbar.Brand href="/">
              <Logo />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link href="historia">Historia</Nav.Link>
                <Nav.Link href="nosotros">Nosotros</Nav.Link>
                <Nav.Link href="noticias">Noticias</Nav.Link>
                <Nav.Link href="imagenes">Imagenes</Nav.Link>
                <Nav.Link href="tienda">Tienda</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
