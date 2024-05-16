CREATE database IF NOT EXISTS task_management_db;

USE task_management_db;

CREATE TABLE IF NOT EXISTS task_status (
    id TINYINT PRIMARY KEY NOT NULL,
    name varchar(20) NOT NULL
);
CREATE TABLE IF NOT EXISTS user (
    id INT PRIMARY KEY NOT NULL,
    username VARCHAR(64) NOT NULL,
    login_id int FOREIGN  KEY NOT NULL,
    created_at TIMESTAMP not null default current_timestamp,
    phone_no CHAR(8)   NOT NULL   
	CHECK (phone_no LIKE '99______' or  
	phone_no like '94________' or 
    phone_no like '85______' or 
    phone_no like '85______' or 
    phone_no like '90______' or 
    phone_no like '91______'or 
    phone_no like '96______'or 
    phone_no like '80______' or
    phone_no like '86______' or 
    phone_no like '88______' or 
    phone_no like '89______' or
    phone_no like '88______' or 
    phone_no like '70______'or 
    phone_no like '71______' or 
    phone_no like '75______' or 
    phone_no like '77______' or 
    phone_no like '76______' or 
    phone_no like '830_____' OR
    phone_no like '831_____' OR 
    phone_no like '930_____' OR 
    phone_no like '931_____' OR
    phone_no like '72______'  OR 
    phone_no like '932_____' OR 
    phone_no like '934_____' OR
    phone_no like '970_____' OR 
    phone_no like '971_____' OR 
    phone_no like '72______')
    );
CREATE TABLE IF NOT EXISTS role (
    id int PRIMARY KEY NOT NULL,
    name varchar(100) NOT NULL
);
CREATE TABLE IF NOT EXISTS login_info (
    id int PRIMARY KEY NOT NULL,
    user_type not null default ('user'or 'staff'),
    email VARCHAR(320) UNIQUE NOT NULL CHECK (email LIKE '%@taskmanager.com' or email like '%@%.com'),
    password VARCHAR(64) UNIQUE NOT NULL,
);
CREATE TABLE IF NOT EXISTS department (
    id int PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP NOT NULL
);
CREATE TABLE IF NOT EXISTS staff_status (
    id int PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL
);
CREATE TABLE IF NOT EXISTS task (
    id INT PRIMARY KEY NOT NULL,
    title VARCHAR(200) NOT NULL,
    description VARCHAR(4000) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    status TINYINT DEFAULT 'NOT SOLVED' NOT NULL,
    solution VARCHAR(4000) NULL
);
CREATE TABLE IF NOT EXISTS staff (
    id INT PRIMaRY KEY NOT NULL,
    department_id int FOREIGN KEY NOT NULL,
    role_id int FOREIGN KEY NOT NULL,
    login_id int FOREIGN KEY NOT NULL,
    status TINYINT DEFAULT 'Active',
    date_of_enrollment TIMESTAMP,
    phone_no CHAR(8) NOT NULL UNIQUE
    CHECK (phone_no LIKE '99______') or 
    (phone_no like '94________') or 
    (phone_no like '85______') or 
    (phone_no like '85______') or 
    (phone_no like '90______') or 
    (phone_no like '91______')or 
    (phone_no like '96______')or 
    (phone_no like '80______') or
    (phone_no like '86______') or 
    (phone_no like '88______') or 
    (phone_no like '89______') or
    (phone_no like '88______') or 
    (phone_no like '70______')or 
    (phone_no like '71______') or 
    (phone_no like '75______') or 
    (phone_no like '77______') or 
    (phone_no like '76______') or 
    (phone_no like '830_____') OR
    (phone_no like '831_____') OR 
    (phone_no like '930_____') OR 
    (phone_no like '931_____') OR
    (phone_no like '72______')  OR 
    (phone_no like '932_____') OR 
    (phone_no like '934_____') OR
    (phone_no like '970_____') OR 
    (phone_no like '971_____') OR 
    (phone_no like '72______'),
);
CREATE TABLE IF NOT EXISTS task_assignment (
    task_id int  FOREIGN KEY NOT NULL,
    creator_id int FOREIGN KEY NOT NULL,
    staff_id int FOREIGN KEY NOT NULL
);
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

