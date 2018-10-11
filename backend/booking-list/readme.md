#copy booking-list folder to the web server project directory.

#create database and table with data

CREATE DATABASE bhb_booking;

CREATE TABLE bl_hotels (
    hotel_id int(4) auto_increment,
    name text(30) not null,
    address varchar(400) not null,
	price int not null,
    PRIMARY KEY (hotel_id)
	);

ALTER TABLE bl_hotels AUTO_INCREMENT=1;

INSERT INTO `bl_hotels` (`hotel_id`, `name`, `address`, `price`) VALUES
(1, 'B Hotel', 'M Address', 100),
(2, 'D Hotel', 'L Address', 139),
(3, 'T Hotel', 'K Address', 149),
(4, 'G Hotel', 'H Address', 129),
(5, 'J Hotel', 'R Address', 119),
(6, 'O Hotel', 'S Address', 156),
(7, 'U Hotel', 'A Address', 194),
(8, 'P Hotel', 'I Address', 123),
(9, 'A Hotel', 'O Address', 275),
(10, 'Z Hotel', 'P Address', 324),
(11, 'V Hotel', 'T Address', 125),
(12, 'X Hotel', 'V Address', 954),
(13, 'F Hotel', 'W Address', 253),
(14, 'N Hotel', 'S Address', 123),
(15, 'L Hotel', 'C Address', 143),
(16, 'E Hotel', 'S Address', 544);

#if you want to correct the path to the test.php file
for example:
	http://localhost/booking-list/api/test.php

#backend is working
