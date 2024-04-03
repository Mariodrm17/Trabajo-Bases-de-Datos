-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 03-04-2024 a las 14:58:43
-- Versión del servidor: 8.2.0
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `portaventura`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `areas`
--

DROP TABLE IF EXISTS `areas`;
CREATE TABLE IF NOT EXISTS `areas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text,
  `fecha_apertura` date DEFAULT NULL,
  `ubicacion` varchar(100) DEFAULT NULL,
  `fecha_registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `areas`
--

INSERT INTO `areas` (`id`, `nombre`, `descripcion`, `fecha_apertura`, `ubicacion`, `fecha_registro`) VALUES
(1, 'Mediterrània', 'Área temática inspirada en el Mediterráneo y sus culturas.', '1995-04-02', 'PortAventura World', '2024-04-03 14:57:33'),
(2, 'China', 'Área temática inspirada en la China antigua y su cultura.', '1995-04-02', 'PortAventura World', '2024-04-03 14:57:33'),
(3, 'México', 'Área temática inspirada en la cultura y arquitectura mexicana.', '1995-04-02', 'PortAventura World', '2024-04-03 14:57:33'),
(4, 'Polynesia', 'Área temática inspirada en las islas del Pacífico y su cultura.', '1995-04-02', 'PortAventura World', '2024-04-03 14:57:33');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `atracciones`
--

DROP TABLE IF EXISTS `atracciones`;
CREATE TABLE IF NOT EXISTS `atracciones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `altura_minima` decimal(5,2) DEFAULT NULL,
  `descripcion` text,
  `fecha_apertura` date DEFAULT NULL,
  `tiempo_espera_promedio` int DEFAULT NULL,
  `ubicacion` varchar(100) DEFAULT NULL,
  `capacidad` int DEFAULT NULL,
  `estado` enum('Operativa','En Mantenimiento') DEFAULT 'Operativa',
  `fecha_registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `atracciones`
--

INSERT INTO `atracciones` (`id`, `nombre`, `tipo`, `altura_minima`, `descripcion`, `fecha_apertura`, `tiempo_espera_promedio`, `ubicacion`, `capacidad`, `estado`, `fecha_registro`) VALUES
(1, 'Shambhala', 'Montaña Rusa', '1.40', 'Montaña rusa de tipo hypercoaster con una altura máxima de 76 metros y una velocidad máxima de 134 km/h.', '2012-05-12', 45, 'Mediterrània', 32, 'Operativa', '2024-04-03 14:57:33'),
(2, 'Furius Baco', 'Montaña Rusa', '1.40', 'Montaña rusa lanzada que alcanza una velocidad máxima de 135 km/h en 3 segundos.', '2007-06-05', 30, 'Mediterrània', 20, 'Operativa', '2024-04-03 14:57:33'),
(3, 'Dragon Khan', 'Montaña Rusa', '1.40', 'Montaña rusa con ocho inversiones y una altura máxima de 45 metros.', '1995-04-02', 40, 'China', 28, 'Operativa', '2024-04-03 14:57:33'),
(4, 'Red Force', 'Acelerador Vertical', '1.40', 'Acelerador vertical con una altura máxima de 112 metros y una velocidad máxima de 180 km/h.', '2017-04-07', 60, 'México', 16, 'Operativa', '2024-04-03 14:57:33'),
(5, 'Tutuki Splash', 'Rápidos', '1.00', 'Atracción de rápidos con una caída de 15 metros.', '1995-04-02', 25, 'Polynesia', 24, 'Operativa', '2024-04-03 14:57:33');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

DROP TABLE IF EXISTS `empleados`;
CREATE TABLE IF NOT EXISTS `empleados` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `puesto` varchar(100) NOT NULL,
  `area_trabajo` varchar(100) DEFAULT NULL,
  `fecha_contratacion` date DEFAULT NULL,
  `salario` decimal(10,2) DEFAULT NULL,
  `estado` enum('Activo','Inactivo') DEFAULT 'Activo',
  `fecha_registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `nombre`, `apellido`, `puesto`, `area_trabajo`, `fecha_contratacion`, `salario`, `estado`, `fecha_registro`) VALUES
(1, 'Juan', 'Martinez', 'Operador de atracciones', 'Mediterrània', '2010-03-15', '1800.00', 'Activo', '2024-04-03 14:57:33'),
(2, 'María', 'González', 'Técnico de mantenimiento', 'México', '2015-08-20', '2200.00', 'Activo', '2024-04-03 14:57:33'),
(3, 'Carlos', 'López', 'Guía de espectáculos', 'China', '2018-05-10', '2000.00', 'Activo', '2024-04-03 14:57:33'),
(4, 'Ana', 'Rodríguez', 'Cajero de tienda', 'Polynesia', '2020-01-30', '1600.00', 'Activo', '2024-04-03 14:57:33');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visitantes`
--

DROP TABLE IF EXISTS `visitantes`;
CREATE TABLE IF NOT EXISTS `visitantes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `genero` enum('Masculino','Femenino','Otro') NOT NULL,
  `nacionalidad` varchar(100) DEFAULT NULL,
  `tipo_documento` varchar(20) DEFAULT NULL,
  `numero_documento` varchar(20) DEFAULT NULL,
  `fecha_registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `visitantes`
--

INSERT INTO `visitantes` (`id`, `nombre`, `apellido`, `fecha_nacimiento`, `genero`, `nacionalidad`, `tipo_documento`, `numero_documento`, `fecha_registro`) VALUES
(1, 'Raul', 'Pelayo', '2004-05-10', 'Masculino', 'Española', 'DNI', '12345678A', '2024-04-03 14:57:33'),
(2, 'Alvaro', 'Lostal', '2004-08-12', 'Masculino', 'Española', 'DNI', '87654321B', '2024-04-03 14:57:33'),
(3, 'Mario del Rio', 'Merino', '2004-11-17', 'Masculino', 'Española', 'DNI', '98765432C', '2024-04-03 14:57:33'),
(4, 'Luis', 'Pérez', '1978-03-25', 'Masculino', 'Española', 'DNI', '23456789D', '2024-04-03 14:57:33');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visitas`
--

DROP TABLE IF EXISTS `visitas`;
CREATE TABLE IF NOT EXISTS `visitas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_visitante` int NOT NULL,
  `fecha_visita` date NOT NULL,
  `cantidad_personas` int NOT NULL,
  `monto_total` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_visitante` (`id_visitante`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `visitas`
--

INSERT INTO `visitas` (`id`, `id_visitante`, `fecha_visita`, `cantidad_personas`, `monto_total`) VALUES
(1, 1, '2023-07-10', 2, '80.00'),
(2, 2, '2023-08-05', 3, '120.00'),
(3, 3, '2023-09-15', 1, '40.00'),
(4, 4, '2023-10-20', 2, '90.00');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `visitas`
--
ALTER TABLE `visitas`
  ADD CONSTRAINT `visitas_ibfk_1` FOREIGN KEY (`id_visitante`) REFERENCES `visitantes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
