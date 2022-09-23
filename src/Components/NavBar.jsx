import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../imagenes/logo.png'
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/">
        <img
              alt="logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          NELAIN-ART</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link to="/category/4">Buzos</Link>
          <Link to="/category/5">Camisetas</Link>
            <NavDropdown title="Calzado" id="collasible-nav-dropdown">
            <Link to="/category/1">Zapatos</Link>
            <Link to="/category/2">Zapatillas</Link>
            <Link to="/category/3">Alpargatas</Link>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link to="/cart"><CartWidget/></Link>
            <Nav.Link>
              Preguntas
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;