import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png';
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            <Navbar sticky="top" bg="dark" variant="light">
                <img className="logo" src={logo} alt="" />
                <Form>
                    <FormControl type="text" placeholder="Search your Destination..." className="mr-sm-2" />
                </Form>
                <Nav className="ml-auto px-5">

                    <li>
                        <Link to="/home"> Home</Link>
                    </li>
                    <li>
                        <Link to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>

                    <Button className="btn" variant="warning">Search</Button>

                </Nav>

            </Navbar>
        </div>
    );
};

export default Header;