import { useState } from 'react';

const App = () => {
	const [count, setCount] = useState<number>(0);

	return (
		<div>
			<button onClick={() => setCount((prev) => prev + 1)}> + 1</button>
			<span>{count}</span>
		</div>
	);
};

export default App;