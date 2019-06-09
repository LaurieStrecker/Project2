DROP DATABASE IF EXISTS student_db;

CREATE DATABASE student_db;

USE student_db;

-- CREATE TABLE students (
--   id INT NOT NULL AUTO_INCREMENT,
--   first_name VARCHAR(50) NOT NULL,
--   last_name VARCHAR(50) NOT NULL,
--   email VARCHAR(50) NOT NULL,
--   phone VARCHAR(50),
--   google_id INT(100) NOT NULL,
--   school_name VARCHAR(50) NOT NULL,
--   qt_sem VARCHAR(50) NOT NULL,
--   program_start DATE NOT NULL,
--   program_end DATE NOT NULL,
--   ed_level VARCHAR(50) NOT NULL,
--   cip_code_one DECIMAL(4,4) NOT NULL,
--   PRIMARY KEY (id)
-- );

-- Definitions
-- ed_level = education level. for our app we should use the most common ones
-- which are Language Training, Associate's, Bachelor's, Master's, and Doctoral
-- 
-- CIP codes are program codes (i.e. majors) that are nationally standardized.
-- If you look at picture of an I-20, you will see the CIP code under Major 1 and
-- Major 2. Major 2 is generally the minor

-- https://studyinthestates.dhs.gov/sites/default/files/I-20_Active.pdf
