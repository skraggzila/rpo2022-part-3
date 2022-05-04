import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';
import Utils from "../utils/Utils";

const NavigationBar = () => {
    let navigate = useNavigate();
    let uname = Utils.getUserName();

    const goHome = () => {
        navigate("home", { replace: true });
    }

    const logout = () => {
        Utils.removeUser();
        goHome();
    }

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand><FontAwesomeIcon icon={faHome} />{' '}My RPO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {/*<Nav.Link href={"\home"}>Home</Nav.Link>*/}
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link onClick={goHome}>Another Home</Nav.Link>
                    <Nav.Link onClick={goHome}>Yet Another Home</Nav.Link>
                </Nav>
                <Navbar.Text>{uname}</Navbar.Text>
                { uname &&
                    <Nav.Link onClick={logout}><FontAwesomeIcon icon={faUser} fixedWidth />{' '}Выход</Nav.Link>
                }
                { !uname &&
                    <Nav.Link as={Link} to="/login"><FontAwesomeIcon icon={faUser} fixedWidth />{' '}Вход</Nav.Link>
                }
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;