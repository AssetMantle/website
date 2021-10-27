import React from "react";
import {NavLink, withRouter} from "react-router-dom";
import {useHistory} from "react-router-dom";
import {Navbar, Nav } from "react-bootstrap";
import logo from '../images/logo.svg';

const Header = () => {
    const history = useHistory();
    const handleRoute = route => () => {
        history.push(route);
    };

    const handleModelRoute = (route) => {
        history.push(`/${route}`);
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
                        <Nav.Link onClick={() => handleModelRoute("signup")}>Market Place</Nav.Link>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/marketplace">Docs</NavLink>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};


export default withRouter(Header);
