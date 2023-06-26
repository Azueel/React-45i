import React, { useState } from 'react';

export const Counter = () => {
	const [counter, setCounter] = useState(20);

	const [msg, setMsg] = useState('');
	const [show, setShow] = useState(false);

	const sumar = () => {
		setCounter(counter + 1);
	};

	const restar = () => {
		setCounter(counter - 1);
	};

	const resetear = () => {
		setCounter(20);
	};

	const mensaje = () => {
		setShow(true);
		setMsg('soy un mensaje');

		setTimeout(() => {
			setShow(false);
			setMsg('');
		}, 4000);
	};

	return (
		<>
			{show ? msg : ''}

			<h2>{counter}</h2>

			<button onClick={restar}>-1</button>
			<button onClick={resetear}>Reset</button>
			<button onClick={sumar}>+1</button>

			<button onClick={mensaje}>Mostrar Mensaje</button>
		</>
	);
};
