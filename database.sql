CREATE TABLE IF NOT EXISTS task_status (
    id TINYINT,
    name varchar(20)
);

CREATE TABLE IF NOT EXISTS task (
    id INT,
    title VARCHAR(200),
    description VARCHAR(4000),
    created_at TIMESTAMP,
    status TINYINT,
    solution VARCHAR(4000)
);

CREATE TABLE IF NOT EXISTS task_assignment (
    task_id int,
    creator_id int,
    staff_id int
);

CREATE TABLE IF NOT EXISTS user (
    id INT,
    username VARCHAR(64),
    
)