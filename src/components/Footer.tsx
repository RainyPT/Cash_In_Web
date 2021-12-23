import React from 'react'
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Collapse className="justify-content-center">
                        <Navbar.Text>
                            <p>Copyright © {new Date().getFullYear()}: <span><a href="google.com">webspending.com</a></span></p>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
    )
}
export default Footer;