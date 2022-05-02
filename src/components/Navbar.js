import React, { useState } from 'react'
import { Button, Collapse, Form, Input, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

const logoCompany = "//iamstudio.co/img/logo.ff85952d.png";

const NavbarPage = () => {

	const [isOpen, setIsOpen] = useState(false);

	return (
		<Navbar expand="md" fixed="top" className='sd-box' dark>
			<NavbarBrand href="/"><img src={logoCompany} className="img-fluid logo" alt='logo brand' /></NavbarBrand>
			<NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
			<Collapse isOpen={isOpen} navbar>
				<Nav className="mr-auto" navbar>
					<NavItem>
						<NavLink href="#">Home</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">About Us</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">Contact</NavLink>
					</NavItem>
				</Nav>
				<Form className='search'>
					<div className='search-box'>
						<Input placeholder='Search...' />
						<Button><i class="bi bi-search"></i></Button>
					</div>
				</Form>
			</Collapse>
		</Navbar>
	)
}

export default NavbarPage