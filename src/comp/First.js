
import { Container, Nav, Navbar } from 'react-bootstrap';
import React from 'react';
import './First.css';
const First = () => {
    return (
        <div>
            <Navbar className="nav">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default First

