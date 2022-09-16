import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../imagenes/logo.png'
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="py-4">
        <img
              alt="logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          NELAIN-ART
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/category/4">Buzos</Nav.Link>
            <Nav.Link href="/category/5">Camisetas</Nav.Link>
            <NavDropdown title="Calzado" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/category/1">Zapatos</NavDropdown.Item>
              <NavDropdown.Item href="/category/2">Zapatillas</NavDropdown.Item>
              <NavDropdown.Item href="/category/3">Alpargatas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Go to my telegram
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/cart" className="link-danger"><CartWidget/></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Preguntas
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;