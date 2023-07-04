import React, { useEffect, useState } from 'react';

//react-bootstrap components
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

//custom css
import './Global.css';

const App = () => {
	const initTodos = localStorage.getItem('Todos')
		? JSON.parse(localStorage.getItem('Todos'))
		: [];

	const [todos, setTodos] = useState(initTodos);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const submit = (e) => {
		e.preventDefault();
		setTodos([...todos, { title, description, id: Date.now() }]);
		setTitle('');
		setDescription('');
	};

	const deleteTodo = (id) => {
		const filteredTodos = todos.filter((todo) => todo.id !== id);
		setTodos(filteredTodos);
	};

	const edit = (id) => {
		const findTodo = todos.find((todo) => todo.id === id);
		console.log(findTodo);
		deleteTodo(id);
		setTitle(findTodo.title);
		setDescription(findTodo.description);
	};

	useEffect(() => {
		localStorage.setItem('Todos', JSON.stringify(todos));
	}, [todos]);
	return (
		<>
			<Container className="wrapper p-0" fluid>
				<Container className="navbar" fluid>
					<Container>
						<h2 className="mx-auto my-4">To Do List 📖</h2>
					</Container>
				</Container>
				<Container className="mt-3 mt-md-5">
					<Row>
						<Col xs="12" md="4">
							<div className="input-fields">
								<Form onSubmit={submit}>
									<Form.Group
										className="mb-3"
										controlId="exampleForm.ControlInput1"
									>
										<Form.Control
											type="text"
											placeholder="Title"
											value={title}
											onChange={(e) => setTitle(e.target.value)}
											style={{
												borderRadius: '0px',
												padding: '10px',
											}}
										/>
									</Form.Group>
									<Form.Group
										className="mb-3"
										controlId="exampleForm.ControlTextarea1"
									>
										<Form.Control
											as="textarea"
											rows={6}
											placeholder="Description"
											value={description}
											onChange={(e) =>
												setDescription(e.target.value)
											}
											style={{ borderRadius: '0px' }}
										/>
									</Form.Group>
									<Button
										variant="success"
										style={{
											width: '100%',
											borderRadius: '0px',
											border: 'none',
											background:
												'linear-gradient(to right bottom, #09203F, #537895)',
											padding: '10px 0px',
											outline: 'none',
										}}
										type="submit"
									>
										Save
									</Button>
								</Form>
							</div>
						</Col>
						<Col xs="12" md="8">
							<div
								style={{
									borderBottom: '2px solid white',
									color: 'white',
								}}
								className="my-4 my-md-0 d-flex justify-content-between align-items-center px-1 px-md-3"
							>
								<h5>Tasks</h5>

								<h5>Delete/Edit</h5>
							</div>
							{todos.length > 0 ? (
								todos.map((todo) => (
									<Container className="my-4 px-0" key={todo.id}>
										<div className="tasks d-flex justify-content-between px-2">
											<div>
												<h5>{todo.title}</h5>
												<p>{todo.description}</p>
											</div>
											<div>
												<div
													style={{
														width: '35px',
														height: '35px',
														display: 'flex',
														borderRadius: '20px',
														justifyContent: 'center',
														alignItems: 'center',
														backgroundColor: 'crimson',
														color: 'white',
														cursor: 'pointer',
													}}
													onClick={() => deleteTodo(todo.id)}
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
												<div
													style={{
														marginTop: '10px',
														width: '35px',
														height: '35px',
														display: 'flex',
														borderRadius: '20px',
														justifyContent: 'center',
														alignItems: 'center',
														backgroundColor: 'green',
														color: 'white',
														cursor: 'pointer',
													}}
													onClick={() => edit(todo.id)}
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														fill="currentColor"
														className="bi bi-pencil-square"
														viewBox="0 0 16 16"
													>
														<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
														<path
															fillRule="evenodd"
															d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
														/>
													</svg>
												</div>
											</div>
										</div>
									</Container>
								))
							) : (
								<h1 className="text-center text-white my-5">
									Nothing To Do 😊
								</h1>
							)}
						</Col>
					</Row>
				</Container>
			</Container>
		</>
	);
};

export default App;
