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
    <Navbar className='navbar' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link className='navbar__title d-flex flex-row justify-content-center
        align-items-center' to="/">
        <div className='navbar__marca me-3 p-1'>
        <img
              alt="logo"
              src={logo}
              className="d-inline-block align-top navbar__image"
            />
          </div>{' '}
          NELAIN-ART</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link className='navbar__links' to="/category/4">Buzos</Link>
          <Link className='navbar__links' to="/category/5">Camisetas</Link>
            <NavDropdown className="d-flex flex-column justify-content-center" title="Calzado" id="collasible-nav-dropdown">
            <Link className='navbar__links' to="/category/1">Zapatos</Link>
            <Link className='navbar__links' to="/category/2">Zapatillas</Link>
            <Link className='navbar__links' to="/category/3">Alpargatas</Link>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link className='navbar__links' to="/cart"><CartWidget/></Link>
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