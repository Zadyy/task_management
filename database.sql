drop database if exists task_management;
create database if not exists task_management;
use task_management;

-- Create tables--
CREATE TABLE IF NOT EXISTS task_status (
    id TINYINT PRIMARY KEY NOT NULL,
    status VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS department (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS staff_status (
    id INT PRIMARY KEY,
    status VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS user_type (
	id INT PRIMARY KEY,
    type VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS role (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    department_id INT NOT NULL
);

CREATE TABLE IF NOT EXISTS login_info (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_type int  NOT NULL,
    username VARCHAR(320) UNIQUE NOT NULL,
    password VARCHAR(64) NOT NULL,
    FOREIGN KEY (user_type) REFERENCES user_type(id)
);

CREATE TABLE IF NOT EXISTS user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    lastname VARCHAR(64) NOT NULL,
    firstname VARCHAR(64) NOT NULL,
    login_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    phone_no CHAR(8) NOT NULL,
    FOREIGN KEY (login_id) REFERENCES login_info(id),
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

CREATE TABLE IF NOT EXISTS staff (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    department_id INT NOT NULL,
    role_id INT NOT NULL,
    login_id INT NOT NULL,
    lastname VARCHAR(64) NOT NULL,
    firstname VARCHAR(64) NOT NULL,
    status INT DEFAULT 1 NOT NULL, -- Assuming 1 for Active and 0 for Inactive
    date_of_enrollment TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    phone_no CHAR(8) NOT NULL UNIQUE,
    FOREIGN KEY (department_id) REFERENCES department(id),
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (status) REFERENCES staff_status(id),
    FOREIGN KEY (login_id) REFERENCES login_info(id),
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

CREATE TABLE IF NOT EXISTS task (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    description VARCHAR(4000) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    status TINYINT DEFAULT 0 NOT NULL,
    solution VARCHAR(4000) DEFAULT 'Not solved',
    FOREIGN KEY (status) REFERENCES task_status(id)
);

CREATE TABLE IF NOT EXISTS task_assignment (
	task_id INT NOT NULL,
    creator_id INT NOT NULL,
    staff_id INT,
    FOREIGN KEY (task_id) REFERENCES task(id),
    FOREIGN KEY (creator_id) REFERENCES user(id),
	FOREIGN KEY (staff_id) REFERENCES staff(id)
);




-- Insert data into tables--
INSERT INTO task_status VALUES
('0','Not-solved'),
('1','Solved');

INSERT INTO department (id, name) VALUES 
(0, 'N/a'),
(1, 'Human Resources'), 
(2, 'Finance'), 
(3, 'IT'), 
(4, 'Marketing');

INSERT INTO staff_status VALUES
('0','Ажлаас гарсан'),
('1','Ажиллаж байгаа'),
('2','Чөлөө авсан'),
('3','Өвчтэй'),
('4','Амралтаа авсан');

INSERT INTO role (id, name, department_id) VALUES 
(0, 'N/a', 0),
(1, 'Admin', 3), 
(2, 'Manager', 2), 
(3, 'Developer', 3), 
(4, 'Tester', 3);

INSERT INTO user_type (id, type) VALUES
(1,'user'),
(2,'staff'),
(3,'admin');

-- INSERT INTO login_info (id, user_type, username, password) VALUES 
-- (1, 1, 'tuguldur', 'password123'), 
-- (2, 1, 'ochuyanga', 'password456'), 
-- (3, 2, 'namuulin', 'password012'), 
-- (4, 2, 'nyambayar', 'password012');

-- INSERT INTO user (id, lastname, firstname,  login_id, phone_no) VALUES 
-- (1,  'Tuguldur', 'Enkhbayr', 4, '99123456'),  
-- (2,  'Och-uyanga', 'Och-uyanga', 2, '85123456');

-- INSERT INTO staff (id, department_id, role_id, login_id, lastname, firstname, phone_no) VALUES 
-- (1, 3, 1, 1, 'Ochir', 'Nymbayr', '99123456'), 
-- (2, 4, 4, 3, 'Namuulin', 'Namuulin', '90123456');

-- INSERT INTO task (id, title, description, status) VALUES 
-- (1, 'Fix login bug', 'Resolve the issue preventing users from logging in.', 0), 
-- (2, 'Update user interface', 'Redesign the main dashboard for better user experience.', 0), 
-- (3, 'Database migration', 'Migrate the database to a new server.', 0), 
-- (4, 'Implement new feature', 'Add the new reporting feature as requested by clients.', 0);

-- INSERT INTO task_assignment (task_id, creator_id, staff_id) VALUES
-- (1, 1, 1),
-- (2, 1, 1),
-- (3, 2, 1),
-- (4, 2, 1);











/* STORED PROCEDURES */
use task_management;
DELIMITER //

CREATE PROCEDURE check_login (in email_value varchar(255), in password_value varchar(255))
BEGIN
    declare email_result varchar(255); -- Renamed the local variable
    declare type varchar(5);
    select email, user_type into email_result, type from login_info where email=email_value and password=password_value;
    select email_result as email, type as user_type; -- Changed the variable name here as well
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE check_email (in email_value varchar(255))
BEGIN
    declare email_result varchar(255); -- Renamed the local variable
    select email into email_result from login_info where email=email_value;
    select email_result as email; -- Changed the variable name here as well
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE sign_up (in email_value varchar(255), in password_value varchar(255))
BEGIN
    insert into login_info (email, password, user_type) values (email_value, password_value, 'user');
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE user_task(in email_value varchar(255))
BEGIN
	DECLARE title varchar(200);
    DECLARE description varchar(4000);
    DECLARE createdAt TIMESTAMP;
    DECLARE status varchar(20);
    DECLARE solution varchar(4000);
	select task.title, task.description, task.created_at, task_status.name, task.solution into title, description, createdAt, status, solution
    from task
    left join task_status on task.status = task_status.id
    left join task_assignment on task.id = task_assignment.task_id
    left join user on task_assignment.creator_id = user.id
    left join login_info on user.login_id = login_info.id
    where login_info.email = email_value;
END //

DELIMITER ;


select * from task_assignment;


-- drop database if exists task_management;
-- CREATE DATABASE task_management;

-- USE task_management;

-- CREATE TABLE roles (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     role_name VARCHAR(50) NOT NULL
-- );

-- INSERT INTO roles (role_name) VALUES ('user'), ('staff'), ('admin');

-- CREATE TABLE users (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     username VARCHAR(50) NOT NULL,
--     password VARCHAR(255) NOT NULL,
--     role_id INT,
--     FOREIGN KEY (role_id) REFERENCES roles(id)
-- );

-- CREATE TABLE tasks (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     user_id INT,
--     staff_id INT,
--     title VARCHAR(255) NOT NULL,
--     description TEXT,
--     solution TEXT,
--     status ENUM('pending', 'completed') DEFAULT 'pending',
--     FOREIGN KEY (user_id) REFERENCES users(id),
--     FOREIGN KEY (staff_id) REFERENCES users(id)
-- );

-- select * from users
-- left join roles on users.role_id = roles.id;

-- select * from tasks;
