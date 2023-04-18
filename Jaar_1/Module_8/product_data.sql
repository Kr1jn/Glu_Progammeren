-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 18 apr 2023 om 11:33
-- Serverversie: 10.4.27-MariaDB
-- PHP-versie: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `appels`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `product_data`
--

CREATE TABLE `product_data` (
  `id` int(10) NOT NULL,
  `colour` varchar(10) NOT NULL,
  `model` varchar(100) NOT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Gegevens worden geëxporteerd voor tabel `product_data`
--

INSERT INTO `product_data` (`id`, `colour`, `model`, `title`) VALUES
(1, 'purple', 'Appel', 'Beste Appel ooit'),
(2, 'Red', 'Appel', 'Slechtste appel ooit'),
(3, 'grey', 'Appel', 'grey apple... Very tasty'),
(4, 'pink', 'Appel', 'Not a good apple'),
(5, 'yellow', 'Orange', 'Not an Orange'),
(6, 'orange', 'Not an apple', 'No apple here '),
(7, 'green', 'Appel', 'No Appel'),
(8, 'hot pink', 'appel', 'appel with pink'),
(9, 'faded red', 'appel', 'appel with reed innit'),
(10, 'brown', 'Appel', 'poopie appel');

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `product_data`
--
ALTER TABLE `product_data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `product_data`
--
ALTER TABLE `product_data`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
