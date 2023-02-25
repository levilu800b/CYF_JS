// You are given two tables, department and employee, with the following structure:

// create table department (
    // dept_id integer not null,
    // dept_name varchar(30) not null,
    // dept_location varchar(30) not null,
    // unique(dept_id)
// );

// create table employee (
    // emp_id integer not null,
    // emp_name varchar(58) not null,
    // dept_id integer not null,
    // salary integer not null
    // unique(emp_id),
    // );

    // Each record in the table department represents a department which might hire some employees. Each record in the table employees represents an employee who works for one of the department. The salary of each employee is known. (However, the location of the departments are not relevant here.)

    // write an SQL query that returns a table comprising all the department (dept_id) in the table department that hire at least one employee, the number of people they employ and the sum of salaries in each department. The table should be ordered by dept_id(in increasing order).

    // The query result format is in the following example:

    // department table:
    // +---------+------------+---------------+
    // | dept_id | dept_name  | dept_location |
    // +---------+------------+---------------+
    // | 1       | IT         | Bangalore     |
    // | 2       | Operations | Mumbai        |
    // | 3       | HR         | Bangalore     |
    // +---------+------------+---------------+

    // employee table:
    // +--------+-----------+---------+--------+
    // | emp_id | emp_name  | dept_id | salary |
    // +--------+-----------+---------+--------+
    // | 1      | Alice     | 1       | 10000  |
    // | 2      | Bob       | 2       | 20000  |
    // | 3      | Charlie   | 1       | 30000  |
    // | 4      | Daniel    | 1       | 40000  |
    // | 5      | Elisa     | 3       | 50000  |
    // +--------+-----------+---------+--------+

    // Result table:
    // +---------+----------------+-------------+
    // | dept_id | employee_count | salary_sum  |
    // +---------+----------------+-------------+
    // | 1       | 3              | 80000       |
    // | 3       | 1              | 50000       |
    // +---------+----------------+-------------+

// solution 
// select dept_id, count(emp_id) as employee_count, sum(salary) as salary_sum
// from employee
// group by dept_id
// having count(emp_id) > 0
// order by dept_id







