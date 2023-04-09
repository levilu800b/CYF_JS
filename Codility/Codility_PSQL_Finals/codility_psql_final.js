// You are given two tables, department and employee, with the following structure:

// create table department (
    // dept_id integer not null,
    // dept_name varchar(30) not null,
    // dept_location varchar(30) not null,
    // unique(dept_id)
// );

// create table employee (
    // emp_id integer not null,
    // emp_name varchar(50) not null,
    // dept_id integer not null,
    // salary integer not null
    // unique(emp_id),
    // );

    // Each record in the table department represents a department which might hire some employees. Each record in the table employees represents an employee who works for one of the department. The salary of each employee is known. (However, the location of the departments are not relevant here.)

    // write an SQL query that returns a table comprising all the department (dept_id) in the table department that hire at least one employee, the number of people they employ and the sum of salaries in each department. The table should be ordered by dept_id(in increasing order).

    // For example, for:

    // department:

    // +---------+------------+---------------+
    // | dept_id | dept_name  | dept_location |
    // +---------+------------+---------------+
    // | 10      | Accounts   | Delhi     |
    // | 20      | Marketing  | Delhi        |
    // | 40      | IT        | Warsaw     |
    // | 30      | Production | Hyderabad     |
    // | 50     | Sales       | Bengaluru     |
    // +---------+------------+---------------+

    // employee:

    // +--------+-----------+---------+--------+
    // | emp_id | emp_name  | dept_id | salary |
    // +--------+-----------+---------+--------+
    // | 1      | Jojo      | 10       | 5000  |
    // | 2      | Popat Lal | 20       | 15000  |
    // | 3      | Santa Singh| 10       | 25000  |
    // | 4      | Banta Singh| 10       | 7500  |
    // | 5      | Sohan Lal  | 30       | 15000  |
    // | 6      | Kk        | 30       | 12000  |
    // | 7      | Bob       | 40       | 35000  |
    // | 8      | John     | 50       | 25000  |
    // | 9      | Smith    | 50       | 5000  |
     // +---------+------------+---------------+

     // Your query should return:

        // +---------+----------------+-------------+
        // | dept_id | count | sum_of_salary  |
        // +---------+----------------+-------------+
        // | 10      | 1              | 12000       |
        // | 20      | 4              | 62500       |
        // | 30      | 2              | 40000       |
        // | 40      | 2              | 30000       |


// solution

// select dept_id, count(emp_id) as count, sum(salary) as sum_of_salary
// from employee
// group by dept_id
// order by dept_id