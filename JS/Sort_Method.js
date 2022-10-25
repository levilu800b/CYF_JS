// Sort Method
// creat a name arry and sort it alphabetically

// const name = [ 'John', 'Bob', 'Mosh', 'Sarah' ];
// const sorted = name.sort();
// console.log(sorted);

// create a number array and sort it in ascending order

// const number = [ 2, 3, 1, 5, 4 ];
// const sorted = number.sort();
// console.log(sorted);

// create a number array and sort it in descending order

// const number = [ 2, 3, 1, 5, 4 ];
// const sorted = number.sort((a, b) => b - a);
// console.log(sorted);

// create a object array and sort it by name

// const courses = [
// 	{
// 		id: 1,
// 		name: 'Node.js',
// 	},
// 	{
// 		id: 2,
// 		name: 'JavaScript',
// 	},
// 	{
// 		id: 3,
// 		name: 'React',
// 	},
// 	{
// 		id: 4,
// 		name: 'Angular',
// 	},
// 	{
// 		id: 5,
// 		name: 'Vue',
// 	},
// ];

// const sorted = courses.sort((a, b) => {
//     const nameA = a.name.toLowerCase();
//     const nameB = b.name.toLowerCase();
//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0;
// });

// console.log(sorted);

// create a object array and sort it by grade

const courseGrade = [
    {
        id: 1,
        name: 'Node.js',
        grade: 90
    },
    {
        id: 2,
        name: 'JavaScript',
        grade: 80
    },
    {
        id: 3,
        name: 'React',
        grade: 70
    },
    {
        id: 4,
        name: 'Angular',
        grade: 60
    },
    {
        id: 5,
        name: 'Vue',
        grade: 50
    },
];

const sorted = courseGrade.sort((a, b) => a.grade - b.grade);
console.log(sorted);