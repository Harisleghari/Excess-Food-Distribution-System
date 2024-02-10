import './headerUser.css'
import './header.css'
// import React, { useState } from 'react';
import companyLogo from '../assets/brand-name.jpg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { PopupMenu } from "react-simple-widgets";
import { Link } from 'react-router-dom';

const HeaderUser = () => {
    // const [dropdownOpen, setDropdownOpen] = useState(false);

    // const toggleDropdown = () => {
    //     setDropdownOpen(!dropdownOpen);
    // };
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary header" sticky="top" >
                <Navbar.Brand href="/userHome">
                    <img className='headerImg' src={companyLogo} width="200" height="65" alt="EFDS" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto Header-Size">
                        <div className='bar'>
                            <Nav.Link className='bar-h' href="/doner">Donate</Nav.Link>
                            <Nav.Link className='bar-h' href="/accepter">Accept</Nav.Link>
                            <Nav.Link className='bar-h' href="/volunteer">Volunteer</Nav.Link>
                            {/* <Nav.Link href="/dashboard"><img className='bar-i' src="https://cdn-icons-png.freepik.com/256/3237/3237472.png" alt="pic" /></Nav.Link> */}
                            {/* <Nav.Link className='bar-b' href="/donation">Donate</Nav.Link> */}
                            <PopupMenu>
                                <img className='bar-i' src="https://cdn-icons-png.freepik.com/256/3237/3237472.png" alt="pic" />

                                <div className="card text-start">
                                    <div className="card-body px-4 py-4">
                                        <div id="circle-avatar" className="text-center mx-auto mb-4">
                                            <img className='bar-i' src="https://cdn-icons-png.freepik.com/256/3237/3237472.png" alt="pic" />
                                        </div>

                                        <h5 className="text-center mb-0">Haris Leghari</h5>
                                        <p className="text-center mb-2">harisleghari61@gmail.com</p>

                                        <hr />

                                        <p
                                            className="mb-0"
                                            style={{ color: "#bebebe", fontWeight: "bold", fontSize: 12 }}
                                        >
                                            ROLES
                                        </p>
                                        <p style={{ fontSize: 12 }}>
                                            {["Donor", "Accepter", "Volunteer"].join(
                                                ", "
                                            )}
                                        </p>

                                        <hr className="mb-0" style={{ margin: "0 -24px 0" }} />

                                        <div
                                            className="list-group list-group-flush"
                                            style={{ margin: "0 -24px 0" }}
                                        >
                                            <Link style={{textDecoration: 'none'}} to="/userHome">
                                                <button className="list-group-item list-group-item-action px-4">
                                                    <small>Home</small>
                                                </button>
                                            </Link>

                                            <button className="list-group-item list-group-item-action px-4">
                                                <small>Profile</small>
                                            </button>
                                            <button className="list-group-item list-group-item-action px-4">
                                                <small>Stats</small>
                                            </button>
                                        </div>

                                        <hr style={{ margin: "0 -24px 24px" }} />

                                        <div className="d-grid">
                                            <Nav.Link className="bar-h" href="/login" onClick={() => {
                                                localStorage.clear();
                                            }}>
                                                <button className="btn btn-secondary">
                                                    <small>Logout</small>
                                                </button>
                                            </Nav.Link>
                                        </div>
                                    </div>
                                </div>
                            </PopupMenu>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default HeaderUser;