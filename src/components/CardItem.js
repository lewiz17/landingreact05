import React from 'react'
import { Button, Card, CardText, CardBody, CardTitle } from 'reactstrap';


const CardItem = ({ title, content }) => {
	return (
		<Card>
			<CardBody>
				<CardTitle tag="h5">{title.substring(0, 20)}</CardTitle>
				<CardText>{content}</CardText>
				<Button>Read more</Button>
			</CardBody>
		</Card>
	)
}

export default CardItem