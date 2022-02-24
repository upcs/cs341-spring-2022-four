-- create the users database
CREATE DATABASE USERS;

-- set the current database
USE USERS;

-- create the table:
-- EMAIL: the user's email address
-- PASSWORD: the user's password
CREATE TABLE USER_INFO(
    EMAIL VARCHAR(50) NOT NULL PRIMARY KEY,
    PASSWORD VARCHAR(50) NOT NULL
);

-- Verify table successfully created (PASSED)
DESCRIBE USER_INFO;

-- Put in a test value for a user
INSERT INTO USER_INFO VALUES ('KCBbutitsKGB@gmail.com', 'KCB123');

--  Verify that the email was successfully created (PASSED)
SELECT EMAIL FROM USER_INFO;
-- NOTE: use DROP TABLE <table name> to delete table