import React from 'react';

export const Main = (props) => {
	console.log(props.titulo);
	return (
		<>
			<h2>{props.titulo}</h2>

			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima repellat
				officiis est consequatur ut delectus optio impedit voluptatum ullam
				voluptates, vitae numquam architecto doloribus distinctio velit animi amet
				voluptate nostrum.
			</p>
		</>
	);
};
