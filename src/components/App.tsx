import { useState } from 'react';
import classes from './App.module.scss'

const App = () => {
	const [count, setCount] = useState<number>(0);

	return (
		<div>
			<button className={classes.button} onClick={() => setCount((prev) => prev + 1)}> + 1</button>
			<span>{count}</span>
		</div>
	);
};

export default App;