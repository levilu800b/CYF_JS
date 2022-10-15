// let laptop = {
// 	brand: 'Lenovo',
// 	screenSize: 13,
// 	isTouchscreen: true,
// };

// let jumper = {
// 	color: 'blue',
// 	isCotton: true,
// };

// let kitten = {
//     furColour: "orange",
//     age: "23"
// };

// let laptopBrand = {
//     brand: "Lenovo",
//     ram: "5GB"
// }

// let phone = {
//     operatingSystem: "iOS",
//     hasStylus: true,
//     megapixels: 12,
//     batteryLife: "24 hours"
// }

// console.log(Object.entries(phone));

// let laptop = {
// 	brand: 'Lenovo',
// 	screenSize: 13,
// 	isTouchscreen: true,
// };

// laptop.brand = 'Apple';

// let key = Object.keys(laptop);

// key[0] = 'APPLE';

// console.log(key[0]);

// let lapTop = {
// 	brand: 'Lenovo',
// 	screenSize: 13,
// 	isTouchscreen: true,
// };
// // Add a new prop
// lapTop.preOrder = true;
// // delete a key
// delete lapTop.brand;
// // create a key
// lapTop.brandName = "Apple";
// console.log(lapTop);

// let house = {
// 	address: '1 Kinning Park',
// 	previousOwners: ['Claire M.', 'John A.'],
// 	currentOwner: {
// 		firstName: 'Margaret',
// 		lastName: 'Conway',
// 	},
// };

// /*
//   DO NOT EDIT ANYTHING ABOVE THIS LINE

//   WRITE YOUR CODE BELOW
// */

// // - change the address of "house" to '51 Berkley Road'
// house.address = '51 Berkley Road';
// // - change the previous owners of "house" to ["Brian M.", "Fiona S."]
// house.previousOwners = ['Brian M.', 'Fiona S.'];
// // - change the last name of the current owner of "house" to "Montgomery"
// house.currentOwner.lastName = 'Montgomery';

// /*
//   DO NOT EDIT ANYTHING BELOW THIS LINE
// */

// console.log(
// 	`Expected result: 51 Berkley Road. Actual result: ${house.address}`,
// );
// console.log(
// 	`Expected result: Brian M., Fiona S. Actual result: ${house.previousOwners.toString()}`,
// );
// console.log(
// 	`Expected result: Montgomery. Actual result: ${house.currentOwner.lastName}`,
// );

// let house = {
// 	address: '1 Kinning Park',
// 	previousOwners: ['Claire M.', 'John A.'],
// 	currentOwner: {
// 		firstName: 'Margaret',
// 		lastName: 'Conway',
// 	},
// };

// let newCurrentOwner = {
// 	firstName: 'Georgina',
// 	lastName: 'Hernandez',
// };

// /*
//   DO NOT EDIT ANYTHING ABOVE THIS LINE

//   WRITE YOUR CODE BELOW
// */

// // - assign the value of the variable 'newCurrentOwner' as the value to the house's "currentOwner"
// house.currentOwner = newCurrentOwner;
// // - from the list of previous owners, replace only "John A." with "Stephen B."
// house.previousOwners[1] = 'Stephen B.';
// // - give the house a new property called 'isForSale' with the value 'false'
// house.isForSale = false;

// /*
//   DO NOT EDIT ANYTHING BELOW THIS LINE
// */
// console.log(
// 	`Did you correctly assign the new owner using the given variable?","Expected result: true. Actual result: " ${
// 		house.currentOwner === newCurrentOwner
// 	}`,
// );
// console.log(
// 	`Expected result: Claire M., Stephen B. Actual result: ${house.previousOwners.toString()}`,
// );
// console.log(`Expected result: false. Actual result: ${house.isForSale}`);

// let kinningParkHouse = {
// 	address: '1 Kinning Park',
// 	price: 180000,
// 	currentOwner: {
// 		firstName: 'Margaret',
// 		lastName: 'Conway',
// 		email: 'margaret@fake-emails.com',
// 	},
// };

// let parkAvenueHouse = {
// 	address: '50 Park Avenue',
// 	price: 195000,
// 	currentOwner: {
// 		firstName: 'Marie',
// 		lastName: 'McDonald',
// 		email: 'marie.m@real-emails.com',
// 	},
// };

// /*
//   DO NOT EDIT ANYTHING ABOVE THIS LINE

//   WRITE YOUR CODE BELOW
// */

// // returns the full name (first name + last name) of the owner of the house
// function getOwnerFullName(house) {
//     return `${house.currentOwner.firstName} ${house.currentOwner.lastName}`;
// }

// // returns an array of the owners' email addresses of the two houses
// function getEmailAddresses(house1, house2) {
//     return [house1.currentOwner.email, house2.currentOwner.email];
// }

// // returns the address for the cheapest house out of the two
// function getCheapestAddress(house1, house2) {
//     if (house1.price < house2.price) {
//         return house1.address;
//     } else {
//         return house2.address;
//     }
// }

// /*
//   DO NOT EDIT ANYTHING BELOW THIS LINE
// */
// console.log(
// 	`Expected result: Margaret Conway. Actual result: ${getOwnerFullName(
// 		kinningParkHouse,
// 	)}`,
// );
// console.log(
// 	`Expected result: margaret@fake-emails.com, marie.m@real-emails.com. Actual result: ${getEmailAddresses(
// 		kinningParkHouse,
// 		parkAvenueHouse,
// 	)}`,
// );
// console.log(
// 	`Expected result: 1 Kinning Park. Actual result: ${getCheapestAddress(
// 		parkAvenueHouse,
// 		kinningParkHouse,
// 	)}`,
// );

// HOW TO MAKE OBJECTS WITH THE CONSTRUCTOR
// object constructor. It is a template for us to create objects.
// ```
// function Person(email, uname, age, gender, previousPurchase) {
//     this.email = email,
//     this.uname = uname,
//     this.age = age,
//     this.gender= gender,
//     this.previousPurchase = previousPurchase
//   }
// ```
// // USE CONSTRCUTOR TO BUILD OBJECTS QUICKLY
// ```
// let personOne = new Person('ryu@ninjas.com', 'ryu', 20, "M", "£50");
// let personTwo = new Person('anna@mariocorp.com', 'anna', 33, "F", "£90" );
// ```
// ======================================================================================
// TASKS - DO THIS IN PAIRS
// In teams.
// function Customer(accountOpeningDate, name, accountNumber, balance, password) {
// 	(this.accountOpeningDate = accountOpeningDate),
// 		(this.name = name),
// 		(this.accountNumber = accountNumber),
// 		(this.balance = balance),
// 		(this.password = password);
// }
// // You are going to  build a small banking app.
// // 1/ make 5 customer objects with properties of account opening date, name, account number, balance, password
// let customerOne = new Customer('01/01/2005', 'Ryu', 1234434, 100, 'password');
// let customerTwo = new Customer('01/01/2015', 'Anna', 123345, 100, 'password');
// let customerThree = new Customer('01/01/2019', 'John', 121010, 100, 'password');
// let customerFour = new Customer(
// 	'01/01/2022',
// 	'Sally',
// 	1205054,
// 	100,
// 	'password',
// );
// let customerFive = new Customer('01/01/2020', 'Sue', 127848, 100, 'password');

// // 2/ set 3 customers balance as above 50
// customerOne.balance = 100;
// customerTwo.balance = 100;
// customerThree.balance = 100;
// // 3/ set 2 customers balance less than 50
// customerTwo.balance = 10;
// customerThree.balance = 10;
// // 4/ set 4 customers account opening date before or equals 2010
// customerOne.accountOpeningDate = '01/01/2005';
// customerTwo.accountOpeningDate = '01/01/2010';
// customerThree.accountOpeningDate = '01/01/2009';
// customerFour.accountOpeningDate = '01/01/2010';
// // 5/ set 1 customer account opening date after 2010
// customerFive.accountOpeningDate = '01/01/2016';
// // CREATE
// // 6/ create an array
// let customers = [];
// // 7/ add all customer objects to the array
// customers.push(
// 	customerOne,
// 	customerTwo,
// 	customerThree,
// 	customerFour,
// 	customerFive,
// );
// // READ
// // 8/ write a function that takes the array of customers and a year as input and return the names of customers who opened an account that year
// function getCustomersByYear(array, year) {
// 	let customersByYear = [];
// 	for (let i = 0; i < array.length; i++) {
// 		if (array[i].accountOpeningDate.includes(year)) {
// 			customersByYear.push(array[i].name);
// 		}
// 	}
// 	return customersByYear;
// }
// //     - test with the year 2009, 2010, 2011
// console.log(getCustomersByYear(customers, '2009'));
// // UPDATE
// // 9/ write a function takes and account number and amount as input and adds that amount inputed to the balence of the account
// function updateBalance(accountNumber, amount) {
// 	for (let i = 0; i < customers.length; i++) {
// 		if (customers[i].accountNumber === accountNumber) {
// 			customers[i].balance += amount;
// 		}
// 	}
// }
// //     - give the customer who opened an account after 2010 with a GBP of 1000
// updateBalance(123345, 1000);
// console.log(customers);
// // READ
// // 10/ write a function that takens an account number and the array of customers and returns a balance.
// function getBalance(accountNumber) {
// 	for (let i = 0; i < customers.length; i++) {
// 		if (customers[i].accountNumber === accountNumber) {
// 			return customers[i].balance;
// 		}
// 	}
// }
// //     - did the balence of the customer who opend an account after 2010 increase by GBP 1000?
// console.log(getBalance(123345));
// ==================================================================================
// Give your code to another pair and get them to check it.