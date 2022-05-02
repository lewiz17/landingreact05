import React, { useState } from 'react'
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from 'reactstrap';
import itemsSidebar from '../data/contentDummy';

const AccordionBox = () => {

	const [itemOpen, setItemOpen] = useState('1');

	const toggle = (id) => {
		itemOpen === id ? setItemOpen() : setItemOpen(id);
	};

	return (
		<Accordion open={itemOpen} toggle={toggle} flush>
			{
				itemsSidebar.map((itemSid, i) => {
					return (
						<AccordionItem key={i}>
							<AccordionHeader targetId={`${i + 1}`}>
								{itemSid.title}
							</AccordionHeader>
							<AccordionBody accordionId={`${i + 1}`}>
								{itemSid.content}
							</AccordionBody>
						</AccordionItem>
					)
				})
			}
		</Accordion>
	)
}

export default AccordionBox