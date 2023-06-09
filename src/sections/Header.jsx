import '../assets/styles/Header.css';
import logo from '../assets/images/logo.png';

import {NavLink} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Fade from 'react-reveal/Fade';

const Header = ()=> {
  return (
    <Navbar className='cyborg-navbar' collapseOnSelect expand="lg"  variant="dark">
    <Container>
        <Navbar.Brand href="/">
            <img src={logo} alt='Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">

            
            <NavLink className="nav-link" to="/">Home</NavLink>
            
            <NavLink className="nav-link" to="#Browse">Browse</NavLink>
            <NavDropdown title="Details" id="collasible-nav-dropdown">
            <Fade>
            <NavLink className="nav-link" style={{"color": "black"}} to="#action/3.2">
                Another action
              </NavLink>
              <NavLink  className="nav-link" style={{"color": "black"}} to="#action/3.3">Something</NavLink>
              <NavLink className="nav-link" style={{"color": "black"}} to="#action/3.1">Action</NavLink>

            </Fade> 
              
            </NavDropdown>
            <NavLink className="nav-link" to="#streams">Streams</NavLink>
            <NavLink className="nav-link" to="/profile">Profile</NavLink>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  );
}

export default Header;
