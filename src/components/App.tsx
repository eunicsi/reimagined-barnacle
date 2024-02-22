import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";

const App = () => {
	const [count, setCount] = useState<number>(0);

	return (
		<div>
			<Link to={"/about"}>about</Link>
			<Link to={"/shop"}>shop</Link>
			<button
				className={classes.button}
				onClick={() => setCount((prev) => prev + 1)}>
				{" + 1 "}
			</button>
			<span>{count}</span>
			<Outlet />
		</div>
	);
};

export default App;
