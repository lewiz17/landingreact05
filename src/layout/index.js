import React from 'react'
import { Container, Row } from 'reactstrap'
import Main from '../components/Main';
import NavbarPage from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Layout = () => {
	return (
		<>
			<NavbarPage />
			<Container fluid className='top-nav'>
				<Row className='content-site'>
					<Sidebar />
					<Main />
				</Row>
			</Container>
		</>
	)
}

export default Layout