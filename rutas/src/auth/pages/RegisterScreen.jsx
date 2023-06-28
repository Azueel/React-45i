import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export const RegisterScreen = () => {
	const [nombre, setNombre] = useState('');
	const [edad, setEdad] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	const isValidEmail = emailRegex.test(email);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			nombre === '' ||
			edad === '' ||
			email === '' ||
			password === '' ||
			confirmPassword === ''
		) {
			console.log('Todos los campos son obligatorios');
		} else if (edad < 18) {
			console.log('el usuario debe ser mayor a 18 años');
		} else if (nombre.length < 3) {
			console.log('el nombre debe tener mas de 3 caracteres');
		} else if (!isValidEmail) {
			console.log('No es un email valido');
		} else if (password.length < 5) {
			console.log('la contraseña debe ser mayor a 5 caracteres');
		} else if (password !== confirmPassword) {
			console.log('las contraseñas deben ser iguales');
		} else {
			console.log('usuario registrado correctamente');
			// mandar datos a la base de datos
		}
	};

	return (
		<div className="container">
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mt-2" controlId="nombre">
					<Form.Label>Nombre</Form.Label>
					<Form.Control
						type="text"
						placeholder="Ingrese su nombre"
						onChange={(e) => setNombre(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className="mt-2" controlId="edad">
					<Form.Label>Edad</Form.Label>
					<Form.Control
						type="number"
						placeholder="Ingrese su edad"
						onChange={(e) => setEdad(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className="mt-2" controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						placeholder="Ingrese su correo electrónico"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className="mt-2" controlId="contrasena">
					<Form.Label>Contraseña</Form.Label>
					<Form.Control
						type="password"
						placeholder="Ingrese su contraseña"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className="mt-2" controlId="confirmarContrasena">
					<Form.Label>Confirmar Contraseña</Form.Label>
					<Form.Control
						type="password"
						placeholder="Confirme su contraseña"
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</Form.Group>

				<Button className="mt-5 w-100 p-2" variant="primary" type="submit">
					Registrarse
				</Button>
			</Form>
		</div>
	);
};
