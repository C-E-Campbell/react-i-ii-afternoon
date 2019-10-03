import React from "react";
import "./PersonCard.css";
const PersonCard = ({
	firstName,
	lastName,
	id,
	city,
	country,
	title,
	employer,
	total
}) => {
	return (
		<div className='card'>
			<h2 className='counter'>{`${id}/${total}`}</h2>
			<h2 className='name'>{`${firstName} ${lastName}`}</h2>
			<h3>
				From: <span>{`${city}, ${country}`}</span>
			</h3>
			<h3>
				Employer: <span>{employer === null ? "n/a" : employer}</span>
			</h3>

			<h3>
				Job Title: <span>{title === null ? "n/a" : title}</span>
			</h3>
		</div>
	);
};

export default PersonCard;
