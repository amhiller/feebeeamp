import React from "react";
import { Navbar, Nav, Container} from 'react-bootstrap'
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/signup'>Sign Up</Nav.Link>
                            <Nav.Link href='/signin'>Sign In</Nav.Link>
                            <Nav.Link href='/userhome'>UserHome</Nav.Link>
                            <Nav.Link href='/projects'>Projects</Nav.Link>
                            <Nav.Link href='/signout'>Sign Out</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;