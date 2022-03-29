-- create the trails database
CREATE DATABASE TRAILS;
-- set the current database
USE TRAILS;
-- create the table:
-- GENERAL-AREA: the general area in OR
-- LOCAL-AREA: the smaller, local name of area
-- HIKE: name of the hike
-- DIFFICULTY: difficulty of the hike
-- DISTANCE: distance in miles of the hike
-- ELEVATION-CHANGE: change in elevation in feet
-- NOTES: notes about the hike

CREATE TABLE TRAIL_INFO(
    GENERAL_AREA VARCHAR(50) NOT NULL,
    LOCAL_AREA VARCHAR(50) NOT NULL,
    HIKE VARCHAR(200) NOT NULL PRIMARY KEY,
    DIFFICULTY ENUM('Easy', 'Moderate', 'Difficult') DEFAULT 'Easy' NOT NULL,
    DISTANCE DECIMAL(3, 1) NOT NULL,
    ELEVATION_CHANGE DECIMAL(4, 1) INT NOT NULL,
    NOTES VARCHAR(520) NOT NULL
);

/* FIGURE OUT HOW TO DO THE ENUM TYPE IN DIFFICULTY
CHECK (
        DIFFICULTY IN ('Easy', 'Moderate', 'Difficult')
    ) DEFAULT 'Easy', */

-- Verify table worked (PASSED)
DESCRIBE TRAIL_INFO;
--  Verify that 233 rows are now in TRAIL_INFO table
SELECT HIKE FROM TRAIL_INFO;
