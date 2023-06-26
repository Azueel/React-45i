import './App.css';
import { Counter } from './components/Counter';
// import { Main } from './components/Main';
// import { Navbar } from './components/Navbar';

function App() {
	const titulo = 'Drama';

	return (
		<>
			{/* <Navbar /> */}
			{/* <h1>Componentes</h1> */}
			{/* <Main titulo={titulo} /> */}

			<Counter />
		</>
	);
}

export default App;
