import React from "react";
import {useHistory} from "react-router-dom";
import {Navbar, Nav } from "react-bootstrap";
import logo from '../images/logo.svg';

const Header = () => {
    const history = useHistory();
    const handleRoute = route => () => {
        history.push(route);
    };

    return (
        <div className="container login-before">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand><Nav.Link onClick={handleRoute("/")}>
                    <img src={logo} alt="logo"/>
                </Nav.Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto ml-auto">
                    </Nav>

                    <Nav>
                        <li className="nav-item">
                            <a href="https://notes.persistence.one/s/Jufq_ChF-" target="_blank" rel="noopener noreferrer" className="nav-link" >Market Place</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://notes.persistence.one/s/Jufq_ChF-" target="_blank" rel="noopener noreferrer" className="nav-link">Docs</a>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};


export default Header;
