// Write a function named cityWeather that returns an object
// representing the weather in a given city. The function should
// fetch the data from the mocked API.
// Requirements
// Implement the cityWeather function to satisfy the following
// requirements:
// 1. The function has one input parameter city, which is a
// string that cannot be empty.
// Throw the "not a string" message if the city
// parameter is not a string.
// Throw the "string is empty" if city is an empty string.
// 2. The BASE_URL variable will be imported at the top of your
// inital file; you need to concatenate the query prefix &q=
// between the BASE_URL and the city parameter (as the url) in
// order to fetch the data correctly like so:
//  <base url><query prefix><city parameter>
// 3. The function should call the mocked API and return an
// object that contains the weather data for the specified city.
// The main property of the mocked reponse contains the data
// to be returned. The format of the returned object should be
// as follows:
// {
//  temp: 21,
//  feels_like: 19.54,
//  temp_min: 21,
//  temp_max: 21,
//  pressure: 1026,
//  humidity: 49
// }
// 4. If the specified city doesn't exist, throw the "city not found"
// error.
// Assumptions
// The API function (axios.get(url) or fetch(url)) will handle
// blank spaces, Unicode characters and lower/upper case
// values (note that the function will transform all characters
// to lower case to find a match).

// Hints
// As Axios and Fetch use HTTP requests, the
// data will be mocked up for the response.
// This will be done automatically when you
// make an HTTP GET request (axios.get(url)
// or fetch(url)); if there is no match - an error
// will be returned.
// Use the HTTP request (asynchronously) to
// be able return an object as expected (the
// return of the HTTP request is a promise
// resolving to an object). An example how to
// do this is given in the initial code file.
// The name of the method to perform the task
// is already provided with the correct
// definition of name and parameters
// (cityWeather(city)).
// The list of cities provided in the mocked-up
// data is: bogota, tokyo, madrid, paris and
// washington; if the city requested does not
// match, the entries in this list, send back the
// error message city not found (this message
// is already provided by the mocked-up API
// and can be sent back using the reject of the
// main promise placed in the initial code).
// Don't forget that blank spaces can be an
// input.

// Examples
// The successful response from the mocked
// API has the following format:
// {
//  status: 200,
//  data: {
//  ...,
//  main: {
//  temp: 21,
//  feels_like: 19.54,
//  temp_min: 21,
//  temp_max: 21,
//  pressure: 1026,
//  humidity: 49
//  },
//  ...
//  }
// }
// The error returned by the API has the
// following format:
// {
//  status: 404,
//  data: {
//  message: 'city not found',
//  code: 404
//  }
// }
// Example scenarios:
// 1. Case 1: Input is not a string
// Examples might be null,
// undefined, {}, [], or number (0,5,99,
// etc..).
// Expected Throw: not a string
// 2. Case 2: Input is an empty string.
// Expected Throw: string is empty
// 3. Case 3: Input is a string, but it is not a
// city that's not found.
// For Input: cityWeather('Ceul')
// Expected Throw: city not found
// (promise reject)
// 4. Case 4: Valid city that contains
// weather data as object properties.
// For Input: cityWeather('Bogotá')
// Expected Output:
// {
//  temp: 21,
//  feels_like: 19.54,
//  temp_min: 21,
//  temp_max: 21,
// pressure: 1026
// Examples might be null,
// undefined, {}, [], or number (0,5,99,
// etc..).
// Expected Throw: not a string
// 2. Case 2: Input is an empty string.
// Expected Throw: string is empty
// 3. Case 3: Input is a string, but it is not a
// city that's not found.
// For Input: cityWeather('Ceul')
// Expected Throw: city not found
// (promise reject)
// 4. Case 4: Valid city that contains
// weather data as object properties.
// For Input: cityWeather('Bogotá')
// Expected Output:
// {
//  temp: 21,
//  feels_like: 19.54,
//  temp_min: 21,
//  temp_max: 21,
// pressure: 1026
// humidity: 49
// }

const axios = require('axios');

const BASE_URL =
	'https://api.openweathermap.org/data/2.5/weather?appid=4b7b1e7d3b1d4d8d8c8d8c8d8c8d8c8d&units=metric&q=';

const cityWeather = async (city) => {
	if (typeof city !== 'string') {
		throw new Error('not a string');
	}
	if (city === '') {
		throw new Error('string is empty');
	}
	const url = BASE_URL + city;
	const response = await axios.get(url);
	if (response.data.cod === '404') {
		throw new Error('city not found');
	}
	const { temp, feels_like, temp_min, temp_max, pressure, humidity } =
		response.data.main;
	return { temp, feels_like, temp_min, temp_max, pressure, humidity };
};

module.exports = cityWeather;

