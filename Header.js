import React from 'react'
import '../App.css';
import './Header.css';

import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
    return (<header> <Navbar fixet="top"  collapseOnSelect expand="md" bg='mited' variat='mited'>
        <Container>
            <Navbar.Brand className='logo' href="/">
                <img src={require('./img/logo.png')} alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Navbar.Brand href='/About'>О компании</Navbar.Brand>
                    <Navbar.Brand href='/Services'>Услуги</Navbar.Brand>
                    <Navbar.Brand href='/Reviews'>Отзывы</Navbar.Brand>
                    <Navbar.Brand href='/Contacts'>Контакты</Navbar.Brand>
                </Nav>
            </Navbar.Collapse>
        </Container>
        <Container>
                <Nav className="ms-auto" >
                    <a class="btn btn-outline-dark" href="/Login" role="button">Войти</a>
                </Nav>
        </Container>
    </Navbar></header >);
}
export default Header
