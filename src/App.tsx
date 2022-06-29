import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	const [users, setUsers] = useState(["Andrew", "Kunal", "Chelsea"]);
	const [user, setUser] = useState("");
	return (
		<div className="App">
			<header className="App-header">
				<img
					src="https://fakebuddhaquotes.com/wp-content/uploads/2015/03/moneky-mind-263x300.gif"
					className="App-logo"
					alt="logo"
				/>
				<p>eMonk</p>
				<select value={user} onChange={(e) => setUser(e.target.value)}>
					{users.map((user) => (
						<option value={user}>{user}</option>
					))}
				</select>
			</header>
		</div>
	);
}

export default App;
