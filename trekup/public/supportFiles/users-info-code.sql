-- create the users database
CREATE DATABASE USERS;

-- set the current database
USE USERS;

-- create the table:
-- EMAIL: the user's email address
-- PASSWORD: the user's password
CREATE TABLE USER_INFO(
    EMAIL VARCHAR(50) NOT NULL PRIMARY KEY,
    DIFFICULTY VARCHAR(50) NOT NULL,
);

-- Verify table successfully created (PASSED)
DESCRIBE USER_INFO;

-- Put in a test value for a user
INSERT INTO USER_INFO VALUES (62, 'Sep', 26, 2, 'cherry', 'thanks! :-)');

--  Verify that the email was successfully created (PASSED)
SELECT EMAIL FROM TRAIL_INFO;