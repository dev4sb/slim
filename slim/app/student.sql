-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 04, 2022 at 08:23 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `demo`
--

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `Firstname` varchar(255) NOT NULL,
  `Lastname` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `DOB` date NOT NULL,
  `Gender` varchar(255) NOT NULL,
  `Hobby` varchar(255) NOT NULL,
  `Education` varchar(255) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `Profile` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `Firstname`, `Lastname`, `Email`, `DOB`, `Gender`, `Hobby`, `Education`, `Description`, `Profile`) VALUES
(2965, 'Adria', 'Jimenez', 'mepikabahe@mailinator.com', '1974-05-13', 'Female', 'Reading,Singing', 'ME', 'Nobis sed aliquam ex', 'Adria.png'),
(2966, 'Gabriel', 'Buckley', 'repaqi@mailinator.com', '1984-07-06', 'Male', 'Reading', 'Bsc', 'Occaecat non sequi i', 'Gabriel.png'),
(2967, 'Signe', 'Pennington', 'fowu@mailinator.com', '1984-05-04', 'Female', 'Reading', 'MCA', 'Voluptate quam dolor', 'Signe.png'),
(2969, 'May', 'Owen', 'fofuxyx@mailinator.com', '1988-05-05', 'Female', 'Reading,Singing', 'Bsc', 'Voluptatem omnis qui', 'May.png'),
(2972, 'Chadwick', 'Case', 'kymisewag@mailinator.com', '2022-07-03', 'Female', 'Singing', 'Bsc', 'Est ut est aute occ', 'Chadwick.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2973;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
