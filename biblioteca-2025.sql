-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         11.3.2-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para biblioteca2025
CREATE DATABASE IF NOT EXISTS `biblioteca2025` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci */;
USE `biblioteca2025`;

-- Volcando estructura para tabla biblioteca2025.autores
CREATE TABLE IF NOT EXISTS `autores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombres` varchar(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci COMMENT='Registro de los autores de cada libro';

-- Volcando datos para la tabla biblioteca2025.autores: ~2 rows (aproximadamente)
DELETE FROM `autores`;
INSERT INTO `autores` (`id`, `nombres`) VALUES
	(1, 'William Shakespeare'),
	(2, 'Ruben Dario');

-- Volcando estructura para tabla biblioteca2025.autor_editorial_libro
CREATE TABLE IF NOT EXISTS `autor_editorial_libro` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `autor_id` int(11) DEFAULT 0,
  `editorial_id` int(11) DEFAULT 0,
  `libro_id` int(11) DEFAULT 0,
  `fecha` date DEFAULT NULL COMMENT 'Fecha de publicación',
  PRIMARY KEY (`id`),
  KEY `FK_autor_editorial_libro_autores` (`autor_id`),
  KEY `FK_autor_editorial_libro_editorial` (`editorial_id`),
  KEY `FK_autor_editorial_libro_libros` (`libro_id`),
  CONSTRAINT `FK_autor_editorial_libro_autores` FOREIGN KEY (`autor_id`) REFERENCES `autores` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_autor_editorial_libro_editorial` FOREIGN KEY (`editorial_id`) REFERENCES `editorial` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_autor_editorial_libro_libros` FOREIGN KEY (`libro_id`) REFERENCES `libros` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci COMMENT='Esta tabla sirve de pivote entre las tablas involucradas';

-- Volcando datos para la tabla biblioteca2025.autor_editorial_libro: ~3 rows (aproximadamente)
DELETE FROM `autor_editorial_libro`;
INSERT INTO `autor_editorial_libro` (`id`, `autor_id`, `editorial_id`, `libro_id`, `fecha`) VALUES
	(1, 2, 1, 2, NULL),
	(2, 2, 1, 3, NULL),
	(3, 2, 2, 1, NULL);

-- Volcando estructura para tabla biblioteca2025.editorial
CREATE TABLE IF NOT EXISTS `editorial` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci COMMENT='Registro de las editoriales de los libros';

-- Volcando datos para la tabla biblioteca2025.editorial: ~2 rows (aproximadamente)
DELETE FROM `editorial`;
INSERT INTO `editorial` (`id`, `nombre`) VALUES
	(1, 'Pearson'),
	(2, 'Panini');

-- Volcando estructura para tabla biblioteca2025.libros
CREATE TABLE IF NOT EXISTS `libros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `copias` int(4) NOT NULL DEFAULT 1,
  `estante` int(4) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci COMMENT='Registro de los libros en la biblioteca de Ocotal';

-- Volcando datos para la tabla biblioteca2025.libros: ~3 rows (aproximadamente)
DELETE FROM `libros`;
INSERT INTO `libros` (`id`, `nombre`, `copias`, `estante`) VALUES
	(1, 'Romeo y Julieta', 1, 1),
	(2, 'Dragonball', 1, 1),
	(3, 'Azul...', 1, 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
