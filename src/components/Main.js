import React, { useEffect, useState } from 'react';
import { Col, CardColumns, Spinner } from 'reactstrap';
import CardItem from './CardItem';

const apiUrl = "//jsonplaceholder.typicode.com/posts?_limit=20";

const Main = () => {


	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(null);

	useEffect(() => {
		setLoading(true);

		const fetchData = async () => {
			const data = await fetch(apiUrl);
			const json = await data.json();
			setLoading(false);
			setData(json);
		}
		fetchData().catch(console.error);
	}, [])

	return (
		<Col className='main'>
			<CardColumns className='content-cards'>
				{
					loading ?
						<div className="loader-content">
							<Spinner className='spin' />
						</div>
						:
						<>
							{
								data.map((item, i) => {
									return (
										<CardItem title={item.title} content={item.body} />
									)
								})
							}
						</>
				}
			</CardColumns>
		</Col>
	)
}

export default Main