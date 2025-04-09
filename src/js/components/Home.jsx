import React from "react";
import { ToDoList } from "./List";




const Home = () => {
	return (
		<div className="container">

			<div className="text-center my-4">
				<h1>My ToDo List</h1>
			</div>
			<ToDoList />
		</div>
	);
};

export default Home;