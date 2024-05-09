CREATE TABLE IF NOT EXISTS task_status (
    id TINYINT,
    name varchar(20)
);

CREATE TABLE IF NOT EXISTS user (
    id INT,
    username VARCHAR(64),
    password VARCHAR(64),
    email VARCHAR(320),
    created_at TIMESTAMP,
    phone_no CHAR(8)
);

CREATE TABLE IF NOT EXISTS role (
    id int,
    name varchar(100)
);

CREATE TABLE IF NOT EXISTS department (
    id int,
    name VARCHAR(100),
    created_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS staff_status (
    id int,
    name VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS task (
    id INT,
    title VARCHAR(200),
    description VARCHAR(4000),
    created_at TIMESTAMP,
    status TINYINT,
    solution VARCHAR(4000)
);

CREATE TABLE IF NOT EXISTS staff (
    id INT,
    department_id int,
    role_id int,
    status TINYINT,
    username VARCHAR(64),
    password VARCHAR(64),
    date_of_enrollment TIMESTAMP,
    phone_no CHAR(8),
    email VARCHAR(320)
);

CREATE TABLE IF NOT EXISTS task_assignment (
    task_id int,
    creator_id int,
    staff_id int
);