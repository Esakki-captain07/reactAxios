import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,useLocation } from 'react-router-dom';

function TopBar() {
    let {pathname} = useLocation()
  return<>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Axios</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className={`navText ${pathname==='/' ? 'active':""}`} to='/'><Nav.Item  >Home</Nav.Item></Link>
                    <Link className={`navText ${pathname==='/dashboard'?'active':""}`} to='/dashboard'><Nav.Item >Dashboard</Nav.Item></Link>
                    <Link className={`navText ${pathname==='/create'?'active':""}`} to='/create'><Nav.Item >Create</Nav.Item></Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
      </>
}

export default TopBar