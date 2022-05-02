import React from 'react'
import { Col, ListGroup, ListGroupItem } from 'reactstrap';
import AccordionBox from './AccordionBox';
import Footer from './Footer';


const Sidebar = () => {
	return (
		<Col md='3' lg='2' className='sidebar'>
			<div className="content-sidebar">
				<div className="main-sidebar">
					<h2 className="section-sidebar">Categories</h2>
					<AccordionBox />
					<h2 className="section-sidebar">Recent Posts</h2>
					<ListGroup>
						<ListGroupItem>
							Post 1
						</ListGroupItem>
						<ListGroupItem>
							Post 2
						</ListGroupItem>
						<ListGroupItem>
							Post 3
						</ListGroupItem>
						<ListGroupItem>
							Post 4
						</ListGroupItem>
						<ListGroupItem>
							Post 5
						</ListGroupItem>
					</ListGroup>
				</div>
				<Footer />
			</div>
		</Col>
	)
}

export default Sidebar