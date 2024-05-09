CREATE database IF NOT EXISTS task_management_db;

USE task_management_db;

CREATE TABLE IF NOT EXISTS task_status (
    id TINYINT PRIMARY KEY NOT NULL,
    name varchar(20) NOT NULL
);
CREATE TABLE IF NOT EXISTS user (
    id INT PRIMARY KEY NOT NULL,
    username VARCHAR(64) NOT NULL,
    password VARCHAR(64) UNIQUE NOT NULL,
    email VARCHAR(320) UNIQUE NOT NULL CHECK (email LIKE '%@gmail.com' or email like '%yahoo.com'),
    created_at TIMESTAMP NOT NULL,
    phone_no CHAR(8)   NOT NULL    
    CHECK (phone_number LIKE '99______') or 
    (phone_number like '94________') or 
    (phone_number like '85______') or 
    (phone_number like '85______') or 
    (phone_number like '90______') or 
    (phone_number like '91______')or 
    (phone_number like '96______')or 
    (phone_number like '80______') or
    (phone_number like '86______') or 
    (phone_number like '88______') or 
    (phone_number like '89______') or
    (phone_number like '88______') or 
    (phone_number like '70______')or 
    (phone_number like '71______') or 
    (phone_number like '75______') or 
    (phone_number like '77______') or 
    (phone_number like '76______') or 
    (phone_number like '830_____') OR
    (phone_number like '831_____') OR 
    (phone_number like '930_____') OR 
    (phone_number like '931_____') OR
    (phone_number like '72______')  OR 
    (phone_number like '932_____') OR 
    (phone_number like '934_____') OR
    (phone_number like '970_____') OR 
    (phone_number like '971_____') OR 
    (phone_number like '72______'),
);
CREATE TABLE IF NOT EXISTS role (
    id int PRIMARY KEY NOT NULL,
    name varchar(100) NOT NULL
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
    status TINYINT DEFAULT 'Active',
    username VARCHAR(64) NOT NULL,
    password VARCHAR(64),
    date_of_enrollment TIMESTAMP,
    phone_no CHAR(8) NOT NULL UNIQUE
    CHECK (phone_number LIKE '99______') or 
    (phone_number like '94________') or 
    (phone_number like '85______') or 
    (phone_number like '85______') or 
    (phone_number like '90______') or 
    (phone_number like '91______')or 
    (phone_number like '96______')or 
    (phone_number like '80______') or
    (phone_number like '86______') or 
    (phone_number like '88______') or 
    (phone_number like '89______') or
    (phone_number like '88______') or 
    (phone_number like '70______')or 
    (phone_number like '71______') or 
    (phone_number like '75______') or 
    (phone_number like '77______') or 
    (phone_number like '76______') or 
    (phone_number like '830_____') OR
    (phone_number like '831_____') OR 
    (phone_number like '930_____') OR 
    (phone_number like '931_____') OR
     (phone_number like '72______')  OR 
      (phone_number like '932_____') OR 
       (phone_number like '934_____') OR
        (phone_number like '970_____') OR 
         (phone_number like '971_____') OR 
          (phone_number like '72______'),
    email VARCHAR(320) NOT NULL CHECK (email LIKE '%@taskmanager.com' or email like '%@%.com'),
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
CREATE TABLE IF NOT EXISTS user (
    id INT PRIMARY KEY NOT NULL,
    username VARCHAR(64) NOT NULL,
    password VARCHAR(64) UNIQUE NOT NULL,
    email VARCHAR(320) UNIQUE NOT NULL CHECK (email LIKE '%@gmail.com' or email like '%yahoo.com'),
    created_at TIMESTAMP NOT NULL,
    phone_no CHAR(8)   NOT NULL    
    CHECK (phone_number LIKE '99______') or 
    (phone_number like '94________') or 
    (phone_number like '85______') or 
    (phone_number like '85______') or 
    (phone_number like '90______') or 
    (phone_number like '91______')or 
    (phone_number like '96______')or 
    (phone_number like '80______') or
    (phone_number like '86______') or 
    (phone_number like '88______') or 
    (phone_number like '89______') or
    (phone_number like '88______') or 
    (phone_number like '70______')or 
    (phone_number like '71______') or 
    (phone_number like '75______') or 
    (phone_number like '77______') or 
    (phone_number like '76______') or 
    (phone_number like '830_____') OR
    (phone_number like '831_____') OR 
    (phone_number like '930_____') OR 
    (phone_number like '931_____') OR
    (phone_number like '72______')  OR 
    (phone_number like '932_____') OR 
    (phone_number like '934_____') OR
    (phone_number like '970_____') OR 
    (phone_number like '971_____') OR 
    (phone_number like '72______'),
);
INSERT INTO user (id, username, password, email, created_at, phone_no) VALUES
(1, 'john_doe', 'password123', 'Tuugiienkhbayr@gmail.com', CURRENT_TIMESTAMP, '99123456'),
(2, 'jane_smith', 'pass123', 'nymbayrh@yahoo.com', CURRENT_TIMESTAMP, '94234567'),
(3, 'mike_jones', 'securepass', 'mike_jones@gmail.com', CURRENT_TIMESTAMP, '85765432'),
(4, 'sara_white', 'strongpassword', 'sara_white@yahoo.com', CURRENT_TIMESTAMP, '90786543');
