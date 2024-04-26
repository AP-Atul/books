create user books with password 'books1234';
drop database IF EXISTS books_backend;
drop database IF EXISTS books_backend_test;
create database books_backend owner books;
create database books_backend_test owner books;
