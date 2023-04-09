// The objective of this task is to write an APl with one GET endpoint.
// Requirements
// You are required to write an APl with Express that will contain the following
// endpoint:
// GET /users
// o endpoint should return status code 200 on successful request;
// o endpoint should return the data taken from the mocked-up database
// using the provided helper function getUsers. This function returns an
// array of user objects containing id (number), name (string) and role
// (string). An example array might appear as follows:
// [
// "id": 1,
// "name": "John",
// 'role": "admin"
// },
// {
// "id": 2,
// "name" Juan"
// "role" : "developer "
// }
// ]

// endpoint should accept a query parameter name which will contain a
// string;
// owhen parameter name is provided, all users whose name property is
// equal to the name query parameter must be returned (it may happen
// that there will be more than one match). If no users with the given name
// are found, an empty array must be returned.
// Hints
// Your solution will be evaluated based on its correctness; performance and
// Coding style will not be assessed.
// You can assume that the id, name and role properties of the users returned
// from the database are present and of the correct types. You do not have to
// verify them.
// You do not have to take care of unsuccessful requests; the response is
// always successful and the status code must equal 208.
// Available packages/libraries
// Express: 4.17.1
// Examples
// Given a database helper method returning the following data:
// [
// {
// "id": 1,
// "name": "John",
// "role": "admin"
// },
// {
// "id": 2,
// "name": "Juan",
// "role": "developer"
// },
// ]

// A request to GET /users should return 200 and the following payload:
// [
// {
// "id": 1,
// "name": "John",
// "role": "admin"
// },
// {
// "id": 2,
// "name": "Juan",
// "role": "developer"
// },
// ]

// A request to GET /users?name=John should return 200 and the following
// payload:
// [
// {
// "id": 1,
// "name": "John",
// "role": "admin"
// },
// ]

// A request to GET /users?name=Johny should return 200 and an empty array: 
// []

const express = require('express');
const app = express();
const { getUsers } = require('./db.js');

// GET /users endpoint
app.get('/users', (req, res) => {
	const name = req.query.name;

	// Get all users from the database
	const users = getUsers();

	// If a name query parameter is provided, filter the users by name
	if (name) {
		const filteredUsers = users.filter((user) => user.name === name);
		return res.status(200).json(filteredUsers);
	}

	// Otherwise, return all users
	return res.status(200).json(users);
});

// Return 500 for all other routes
app.all('*', (req, res) => {
	return res.sendStatus(500);
});

module.exports = app;
