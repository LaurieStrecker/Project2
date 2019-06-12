-- Drops the student_db if it exists currently --
DROP DATABASE IF EXISTS student_db;

-- Creates the "student_db" database --
CREATE DATABASE student_db;

-- Definitions
-- ed_level = education level. for our app we should use the most common ones
-- which are Language Training, Associate's, Bachelor's, Master's, and Doctoral
-- 
-- CIP codes are program codes (i.e. majors) that are nationally standardized.
-- If you look at picture of an I-20, you will see the CIP code under Major 1 and
-- Major 2. Major 2 is generally the minor

-- https://studyinthestates.dhs.gov/sites/default/files/I-20_Active.pdf
