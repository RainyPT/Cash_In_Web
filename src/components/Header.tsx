import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div className='Header'>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">WebSpending</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <a href="#login">Login</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default Header;