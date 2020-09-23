import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
    return (
        <div className="header">
            <Navbar sticky="top" bg="dark" variant="light">
                <img className="logo" src={logo} alt="" />
               
                
                <FontAwesomeIcon className = "search-icon" icon={faSearch} /> 
                <input type="text" placeholder="        Search your Destination..." className="search-box"  />
             
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