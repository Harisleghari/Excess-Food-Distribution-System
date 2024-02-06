import './header.css';
import companyLogo from '../assets/brand-name.jpg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = ()=>{
    
    return(
        <>
            <Navbar expand="lg" className="bg-body-tertiary header" sticky="top" >
                <Navbar.Brand  href="/">
                    <img className='headerImg' src={companyLogo}  width="200" height="65" alt="EFDS"/> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto Header-Size">
                        <div className='bar'>
                        <Nav.Link className='bar-h' href="/doner">Donate</Nav.Link>
                        <Nav.Link className='bar-h' href="/accepter">Get Involved</Nav.Link>
                        <Nav.Link className='bar-h' href="/volunteer">Volunteer</Nav.Link>
                        <Nav.Link className='bar-h' href="/signup">Sign up</Nav.Link>
                        <Nav.Link className="headerBtn" href="/login"><div className='button'><h>Sign In</h></div></Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;