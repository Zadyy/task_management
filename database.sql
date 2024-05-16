CREATE DATABASE IF NOT EXISTS task_management_db;
USE task_management_db;

-- Create tables--
CREATE TABLE IF NOT EXISTS task_status (
    id TINYINT PRIMARY KEY NOT NULL,
    name VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS user (
    id INT PRIMARY KEY NOT NULL,
    lastname VARCHAR(64) NOT NULL,
    firstname VARCHAR(64) NOT NULL,
    login_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    phone_no CHAR(8) NOT NULL,
    CHECK (phone_no LIKE '99______' OR 
           phone_no LIKE '94______' OR 
           phone_no LIKE '85______' OR 
           phone_no LIKE '90______' OR 
           phone_no LIKE '91______' OR 
           phone_no LIKE '96______' OR 
           phone_no LIKE '80______' OR 
           phone_no LIKE '86______' OR 
           phone_no LIKE '88______' OR 
           phone_no LIKE '89______' OR 
           phone_no LIKE '70______' OR 
           phone_no LIKE '71______' OR 
           phone_no LIKE '75______' OR 
           phone_no LIKE '77______' OR 
           phone_no LIKE '76______' OR 
           phone_no LIKE '830_____' OR 
           phone_no LIKE '831_____' OR 
           phone_no LIKE '930_____' OR 
           phone_no LIKE '931_____' OR 
           phone_no LIKE '72______' OR 
           phone_no LIKE '932_____' OR 
           phone_no LIKE '934_____' OR 
           phone_no LIKE '970_____' OR 
           phone_no LIKE '971_____' OR 
           phone_no LIKE '72______')
);

CREATE TABLE IF NOT EXISTS role (
    id INT PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS login_info (
    id INT PRIMARY KEY NOT NULL,
    user_type varchar(5)  NOT NULL DEFAULT 'user',
    email VARCHAR(320) UNIQUE NOT NULL CHECK (email LIKE '%@taskmanager.com' OR email LIKE '%@%.com'),
    password VARCHAR(64) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS department (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS staff_status (
    id INT PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS task (
    id INT PRIMARY KEY NOT NULL,
    title VARCHAR(200) NOT NULL,
    description VARCHAR(4000) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    status TINYINT DEFAULT 0 NOT NULL, -- Assuming 0 for NOT SOLVED and 1 for SOLVED
    solution VARCHAR(4000) NULL
);

CREATE TABLE IF NOT EXISTS staff (
    id INT PRIMARY KEY NOT NULL,
    department_id INT NOT NULL,
    role_id INT NOT NULL,
    login_id INT NOT NULL,
    lastname VARCHAR(64) NOT NULL,
    firstname VARCHAR(64) NOT NULL,
    status TINYINT DEFAULT 1 NOT NULL, -- Assuming 1 for Active and 0 for Inactive
    date_of_enrollment TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    phone_no CHAR(8) NOT NULL UNIQUE,
    CHECK (phone_no LIKE '99______' OR 
           phone_no LIKE '94______' OR 
           phone_no LIKE '85______' OR 
           phone_no LIKE '90______' OR 
           phone_no LIKE '91______' OR 
           phone_no LIKE '96______' OR 
           phone_no LIKE '80______' OR 
           phone_no LIKE '86______' OR 
           phone_no LIKE '88______' OR 
           phone_no LIKE '89______' OR 
           phone_no LIKE '70______' OR 
           phone_no LIKE '71______' OR 
           phone_no LIKE '75______' OR 
           phone_no LIKE '77______' OR 
           phone_no LIKE '76______' OR 
           phone_no LIKE '830_____' OR 
           phone_no LIKE '831_____' OR 
           phone_no LIKE '930_____' OR 
           phone_no LIKE '931_____' OR 
           phone_no LIKE '72______' OR 
           phone_no LIKE '932_____' OR 
           phone_no LIKE '934_____' OR 
           phone_no LIKE '970_____' OR 
           phone_no LIKE '971_____' OR 
           phone_no LIKE '72______')
);

-- Insert data into tables--
INSERT INTO task_status (id, name) VALUES 
(1, 'Not Started'), 
(2, 'In Progress'), 
(3, 'Completed'), 
(4, 'On Hold');

INSERT INTO user (id, lastname, firstname,  login_id, phone_no) VALUES 
(1,  'Tuguldur', 'Enkhbayr', 1, '99123456'), 
(2,  'Nymbayr', 'Ochir', 2, '94123456'), 
(3,  'Och-uyanga', 'Och-uyanga', 3, '85123456'), 
(4,  'Namuulin', 'Namuulin', 4, '90123456');

INSERT INTO role (id, name) VALUES 
(1, 'Admin'), 
(2, 'Manager'), 
(3, 'Developer'), 
(4, 'Tester');

INSERT INTO login_info (id, user_type, email, password) VALUES 
(4, 'user', 'tuugiienkhbayr@taskmanager.com', 'password123'), 
(2, 'user', 'ochuyanga254@yahoo.com', 'password456'), 
(3, 'staff', 'namuulin234@gmail.com', 'password789'), 
(1, 'staff', 'nymbayr2024@yahoo.com', 'password012');

INSERT INTO department (id, name) VALUES 
(1, 'Human Resources'), 
(2, 'Finance'), 
(3, 'IT'), 
(4, 'Marketing');

INSERT INTO staff_status (id, name) VALUES 
(1, 'Active'), 
(2, 'Inactive'), 
(3, 'On Leave'), 
(4, 'Retired');

INSERT INTO task (id, title, description, status) VALUES 
(1, 'Fix login bug', 'Resolve the issue preventing users from logging in.', 0), 
(2, 'Update user interface', 'Redesign the main dashboard for better user experience.', 1), 
(3, 'Database migration', 'Migrate the database to a new server.', 0), 
(4, 'Implement new feature', 'Add the new reporting feature as requested by clients.', 2);

INSERT INTO staff (id, department_id, role_id, login_id, lastname, firstname, phone_no) VALUES 
(1, 3, 1, 3, 'Ochir', 'Nymbayr', '99123456'), 
(2, 2, 2, 4, 'Enkhbayr', 'Tuguldur', '94123456'), 
(3, 1, 3, 1, 'Och-Uyanga', 'Och-Uyanga', '85123456'), 
(4, 4, 4, 2, 'Namuulin', 'Namuulin', '90123456');

INSERT INTO staff_status VALUES
('1','Ажиллаж байгаа'),
('2','Чөлөө авсан'),
('3','Өвчтэй'),
('4','Чөлөө авсан');
INSERT INTO role VALUES
('4','Back-end'),
('1','Front-end'),
('2','Back-End'),
('3','Front-end');
INSERT INTO task_status VALUES
('4','Un-solved'),
('1','Solved'),
('3','Solving'),
('2','Solved');
INSERT INTO users (id,phone_no) VALUES
(1, 'Tuguldur', 'password123', 'Tuugiienkhbayr@gmail.com', '99706661'),
(2, 'Och-Uyanga', 'pass123@6', 'ochuyanga254@yahoo.com', '99234567'),
(3, 'Namuulin', 'securepass', 'namuulin234@gmail.com', '99765432'),
(4, 'Nymbayr', 'strongpassword', 'nymbayr2024@yahoo.com', '99573778');
CREATE TABLE IF NOT EXISTS department (
    id int PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP NOT NULL
);
INSERT INTO department VALUES
('3','Financial','CURRENT_TIMESTAMP'),
('4','Development','CURRENT_TIMESTAMP'),
('2','Human Resources','CURRENT_TIMESTAMP'),
('1','Marketing','CURRENT_TIMESTAMP');