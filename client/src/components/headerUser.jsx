import './headerUser.css'
import './header.css'
import React, { useState } from 'react';
import companyLogo from '../assets/brand-name.jpg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const HeaderUser = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary header" sticky="top" >
                <Navbar.Brand href="/">
                    <img className='headerImg' src={companyLogo} width="200" height="65" alt="EFDS" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto Header-Size">
                        <div className='bar'>
                            <Nav.Link className='bar-h' href="/doner">Donate</Nav.Link>
                            <Nav.Link className='bar-h' href="/accepter">Get Involved</Nav.Link>
                            <Nav.Link className='bar-h' href="/volunteer">Volunteer</Nav.Link>
                            {/* <Nav.Link href="/dashboard"><img className='bar-i' src="https://cdn-icons-png.freepik.com/256/3237/3237472.png" alt="pic" /></Nav.Link> */}
                            <div className="user-dropdown">
                                <img
                                    className='bar-i'
                                    src="https://cdn-icons-png.freepik.com/256/3237/3237472.png"
                                    alt='Profile'
                                    onClick={toggleDropdown}
                                />
                            </div>
                            {dropdownOpen && (
                                    <div className="dropdown-menu">
                                        <ul>
                                            <li><a className="dropdown-item" href="/myProfile">My Profile</a></li>
                                            <li><a className="dropdown-item" href="/myDashboard">My Dashboard</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="/signOut">Signout</a></li>
                                        </ul>
                                    </div>
                                )}
                            {/* <Nav.Link className='bar-b' href="/donation">Donate</Nav.Link> */}
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default HeaderUser;