import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom";
import HEADER_LOGO from './img/HEADER_LOGO.png'

const Header = () => {
    let navigate = useNavigate();
    return (
        <div className='Header'>
            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <img src={HEADER_LOGO} alt='Logo' id="headerLogo"/>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Header;