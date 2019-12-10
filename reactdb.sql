-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2019 at 11:34 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reactdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `property`
--

CREATE TABLE `property` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `date` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `property`
--

INSERT INTO `property` (`id`, `name`, `date`) VALUES
(1, 'working', '12321321'),
(2, 'property 1', '1562355127133'),
(3, '213213', '1562355806529'),
(4, 'proprty1', '1562355864506'),
(5, 'mali@foxx.ca', '1562355904570'),
(6, '123123', '1562356241700'),
(7, '21321312', '1562357053353'),
(8, '21321321', '1562357096121'),
(9, '12312321', '1562357108833'),
(10, '2312', '1562357450747'),
(11, '214124', '1562358119228'),
(12, '21412421', '1562358123524'),
(13, '353425', '1562358169428'),
(14, '2131231', '1562603721116'),
(15, '2131231', '1562610516903'),
(16, 'real madrid', '1562611044592'),
(17, '231312', '1562611131674'),
(18, '12312312', '1562611133715'),
(19, '312312', '1562611135437'),
(20, '12312312', '1562611136947'),
(21, '12312', '1562611138022'),
(22, '1231231', '1562618513243'),
(23, '2131231', '1562618825643'),
(24, 'TEST NEW', '1562619276890'),
(25, '52', '1563810458914'),
(26, '22', '1563810509956'),
(27, '33', '1563816594341'),
(28, '22', '1563827394109'),
(29, 'Property 1', '1563897740630'),
(30, 'Property 1', '1563897920898'),
(31, 'Property 1', '1563901375946'),
(32, '111', '1576014027434'),
(33, 'asdsa', '1576014997579'),
(34, '22', '1576015034963'),
(35, '10', '1576016383536'),
(36, '11', '1576016520985'),
(37, '22', '1576016820739'),
(38, 'tada working', '1576016828988'),
(39, '11111', '1576016844179'),
(40, 'ew', '1576016856267'),
(41, '11', '1576016887900'),
(42, '11', '1576016892323'),
(43, '1312312', '1576016897582'),
(44, '1232131', '1576016944052'),
(45, '111', '1576016948396'),
(46, 'test', '1576016954588'),
(47, 'test2', '1576016959821');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `property`
--
ALTER TABLE `property`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `property`
--
ALTER TABLE `property`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
