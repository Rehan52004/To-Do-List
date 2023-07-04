import React from 'react';
import { Container } from 'react-bootstrap';

const Task = (props) => {
	const { title, description } = props;
	return (
		<>
			<Container className="my-4 px-0">
				<div className="tasks d-flex justify-content-between px-2">
					<div>
						<h6>{title}</h6>
						<p>{description}</p>
					</div>
					<div
						style={{
							width: '40px',
							height: '40px',
							display: 'flex',
							borderRadius: '20px',
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: 'crimson',
							color: 'white',
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColor"
							className="bi bi-x-lg"
							viewBox="0 0 16 16"
						>
							<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
						</svg>
					</div>
				</div>
			</Container>
		</>
	);
};

export default Task;
