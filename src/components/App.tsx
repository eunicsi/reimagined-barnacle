import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import SomePng from "@/assets/addRange.png";
import SomeJpg from "@/assets/223.jpg";
import SomeSvg from "@/assets/circle-heat-svgrepo-com.svg";

const App = () => {
	const [count, setCount] = useState<number>(0);

	return (
		<div>
			<div>
				<img width={100} height={100} src={SomePng} alt="" />
				<img width={100} height={100} src={SomeJpg} alt="" />
			</div>

			<div>
				<SomeSvg width={50} height={50} fill={"red"} />
			</div>

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
