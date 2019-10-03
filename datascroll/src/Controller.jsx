import React from "react";
import "./Controller.css";
const Controller = ({ onClick, onClick2 }) => {
	return (
		<div className='controller'>
			<button className='btn' onClick={onClick2}>
				Prev
			</button>
			<div className='btnContainer'>
				<button className='blueBtn'>These</button>
				<button className='blueBtn'>Dont</button>
				<button className='blueBtn'>Work</button>
			</div>
			<button className='btn' onClick={onClick}>
				Next
			</button>
		</div>
	);
};

export default Controller;
