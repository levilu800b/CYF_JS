// Task 2
// Your task is to create a simple login form component in React.
// The form should consist of two input fields: one for username and one for
// password. Each input should update its value attribute on input change.
// There should also be a Submit button. It should call the onSubmit handler
// when clicked.
// The onSubmit handler is passed through the props to the component and
// accepts two parameters: username and password (in that order).
// When the Submit button is clicked, onSubmit handler should be called. Use a
// button click event handler for this purpose.
// The application uses React 16.13.1.
// Requirements
// • Create an input element for the username field. It should have its id set
// to username-input and type attribute set to text.
// • The username input should update its value attribute on being changed
// with the entered username.
// • Create an input element for the password field. It should have its id set
// to password-input and type attribute set to password.
// • The password input should update its value attribute on being changed
// with the entered password.
// • Create a Submit button with its id set to login-button.
// • The Submit button should be disabled (disabled attribute set to true)
// until both username and password fields are filled.
// • The onSubmit handler should be called when the Submit button is
// clicked.

// • The onSubmit handler should be called with username and password
// passed as parameters.
// The styling and layout of the components is not assessed. Place them within
// the main div in the provided starting code. Wrapping inputs and the Submit
// button in the form element is not needed.
// Make sure the login form component is a default export.

import React, { useState } from 'react';

export default function LoginForm({ onSubmit }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isDisabled, setIsDisabled] = useState(true);

	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
		setIsDisabled(event.target.value === '' || password === '');
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
		setIsDisabled(event.target.value === '' || username === '');
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit(username, password);
	};

	return (
		<div>
			<label htmlFor="username-input">Username:</label>
			<input
				id="username-input"
				type="text"
				value={username}
				onChange={handleUsernameChange}
			/>
			<label htmlFor="password-input">Password:</label>
			<input
				id="password-input"
				type="password"
				value={password}
				onChange={handlePasswordChange}
			/>

			<button id="login-button" onClick={handleSubmit} disabled={isDisabled}>
				Submit
			</button>
		</div>
	);
}
