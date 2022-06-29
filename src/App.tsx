import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

interface User {
	id: number;
	username: string;
}

function App() {
	const [users, setUsers] = useState<User[]>([]);
	const [username, setUsername] = useState("");

	useEffect(() => {
		async function getUsers() {
			try {
				const { data } = await axios.get("");
				console.log(`This is data in `);
				console.log(data);

				setUsers([
					{ id: 1, username: "Andrew" },
					{ id: 2, username: "Kunal" },
					{ id: 3, username: "Chelsea" },
				]);
			} catch (error) {
				console.log(`This is error:`, error);
			}
		}
		getUsers();
	}, []);
	console.log(`This is users in `);
	console.log(users);

	async function handleAddUser() {
		console.log(`This is in add`);
		const id = uuidv4();
		try {
			const { data } = await axios.post("", { id, username });
			console.log(`This is data in `);
			console.log(data);

			setUsers([...users]);
		} catch (error) {
			console.log(`This is error:`, error);
		}
	}

	async function handleDeleteUser(id: number) {
		console.log(`This is in delete`, id);
		try {
			const { data } = await axios.delete("");
			console.log(`This is data in `);
			console.log(data);

			setUsers([
				{ id: 1, username: "Andrew" },
				{ id: 2, username: "Kunal" },
				{ id: 3, username: "Chelsea" },
			]);
		} catch (error) {
			console.log(`This is error:`, error);
		}
	}

	return (
		<div className="App">
			<header className="App-header">
				<img
					src="https://fakebuddhaquotes.com/wp-content/uploads/2015/03/moneky-mind-263x300.gif"
					className="App-logo"
					alt="logo"
				/>
				<p>eMonk</p>
				<input
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					placeholder="Enter username"
				/>
				<button onClick={handleAddUser}>Add user</button>
				<ul>
					{users.map((user) => (
						<>
							<li key={user.id}>{user.username}</li>
							<button onClick={() => handleDeleteUser(user.id)}>
								Delete
							</button>
						</>
					))}
				</ul>
			</header>
		</div>
	);
}

export default App;
