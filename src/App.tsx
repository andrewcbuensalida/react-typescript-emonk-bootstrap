import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
interface User {
	id: number;
	username: string;
}

const endpoint = "https://ueue9gqs50.execute-api.us-west-1.amazonaws.com/users";

function App() {
	const [users, setUsers] = useState<User[]>([]);
	const [username, setUsername] = useState("");

	useEffect(() => {
		async function getUsers() {
			try {
				const { data } = await axios.get(endpoint);
				console.log(`This is data in `);
				console.log(data);

				setUsers(data);
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
		try {
			const { data } = await axios.post(endpoint, { username });

			setUsers([...users, data]);
			setUsername("");
		} catch (error) {
			console.log(`This is error:`, error);
		}
	}

	async function handleDeleteUser(id: number) {
		console.log(`This is in delete`, id);
		try {
			const { data } = await axios.delete(`${endpoint}/${id}`);

			setUsers(users.filter((user) => user.id !== id));
		} catch (error) {
			console.log(`This is error:`, error);
		}
	}

	return (
		<div className="App">
			<header className="App-header bg-dark ">
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
						<li key={user.id}>
							{user.username}{" "}
							<button onClick={() => handleDeleteUser(user.id)}>
								Delete
							</button>
						</li>
					))}
				</ul>
			</header>
		</div>
	);
}

export default App;
