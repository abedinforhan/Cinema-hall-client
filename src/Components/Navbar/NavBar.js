//import react-botstraps
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//react-router-dom
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
           <Navbar.Brand href="#home">Osthir Cinema Hall</  Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="ml-auto px-5">
               <Nav.Link className="px-3" >
                 <Link to="/home">Home</Link>
                </Nav.Link>
              <Nav.Link  className="px-3">
                  <Link to="/login">Login</Link>
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default NavBar;