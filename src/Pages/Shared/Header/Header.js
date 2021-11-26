import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" className="nav-container py-3" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">WORLD-TOUR</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end nav-custom">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#packages">Services</Nav.Link>

                        {
                            user.email ?
                                <>
                                    <Nav.Link as={Link} to="/myBookings">My-Bookings</Nav.Link>
                                    <Nav.Link as={Link} to="/managebookings">Manage All Bookings</Nav.Link>
                                    <Nav.Link as={Link} to="/addPackage">Add New Package</Nav.Link>
                                    <Navbar.Text className="px-2">
                                    </Navbar.Text>
                                    <span className="text-white pe-2">{user.displayName}</span>
                                    <Button variant="light" onClick={logOut}>log-out</Button>
                                </>
                                : <Nav.Link as={Link} to="/login">Log-In</Nav.Link>
                        }






                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;