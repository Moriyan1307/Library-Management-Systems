CREATE DATABASE  IF NOT EXISTS `lms` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `lms`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: lms
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `members` (
  `MemberID` int NOT NULL AUTO_INCREMENT,
  `SSN` varchar(15) NOT NULL,
  `FirstName` varchar(255) DEFAULT NULL,
  `LastName` varchar(255) DEFAULT NULL,
  `CampusAddress` varchar(255) DEFAULT NULL,
  `HomeAddress` varchar(255) DEFAULT NULL,
  `Phone` varchar(15) DEFAULT NULL,
  `MembershipCardNumber` int DEFAULT NULL,
  `MembershipExpiryDate` date DEFAULT NULL,
  `MembershipStatus` varchar(50) DEFAULT 'Active',
  PRIMARY KEY (`MemberID`,`SSN`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES (1,'123-45-6789','John','Doe','Campus123','303 Border St','(555) 123-4567',7890,'2023-11-15','Active'),(2,'987-65-4321','Jane','Smith','Campus456','106 Mesquite St','(987) 654-3210',1234,'2023-11-30','Active'),(3,'456-78-9012','Emily','Johnson','789 College Blvd','101 Main St','(123) 456-7890',5678,'2023-10-31','Active'),(4,'234-56-7890','Michael','Brown','321 Campus Dr','202 Residence Ave','(234) 567-8901',4321,'2023-11-15','Active'),(5,'789-01-2345','Sarah','Miller','456 University St','303 Home St','(876) 543-2109',8765,'2023-09-30','Active'),(6,'567-89-0123','Daniel','White','876 College Ave','404 Residence Blvd','(345) 678-9012',3456,'2023-12-15','Active'),(7,'890-12-3456','Sophia','Davis','987 Campus Blvd','505 Home Dr','(890) 123-4567',6543,'2023-11-30','Active'),(8,'345-67-8901','David','Jones','234 University Ave','606 Residence St','(210) 987-6543',7890,'2023-10-15','Active'),(9,'901-23-4567','Olivia','Clark','543 College Dr','707 Home Ave','(567) 890-1234',8765,'2023-09-15','Active'),(10,'678-90-1234','Ethan','Anderson','765 University Blvd','808 Residence Blvd','(678) 901-2345',4321,'2026-12-31','Active'),(11,'012-34-5678','Ava','Harris','876 Campus St','909 Home Dr','(432) 109-8765',5678,'2025-10-31','Active'),(12,'123-45-6789','Noah','Williams','345 College Ave','1010 Residence Ave','(789) 012-3456',3456,'2023-11-15','Active'),(13,'234-56-7890','Isabella','Taylor','432 University Dr','1111 Home Blvd','(321) 098-7654',6543,'2025-09-30','Active'),(14,'567-89-0123','Liam','Johnson','543 Campus St','1212 Residence St','(543) 210-9876',3132,'2023-12-15','Active'),(15,'890-12-3456','Mia','Brown','654 College Blvd','1313 Home Ave','(876) 543-2198',8765,'2024-05-30','Active'),(16,'123-45-6789','John','Doe','Campus123','Home456','555-1234',7890,'2023-12-31','Active'),(17,'587962563','Abraham','Dickinson','Summerhill','Loudonville','5689547896',1587,'2023-12-31','Active'),(18,'586749325','Aaryan','Mori','Arbor Oaks','Liv+','5862489671',2001,'2023-12-25','Active'),(19,'528968745','Shubh','Soni','409 Summit Ave','404 Border st','8596789246',4652,'2027-11-19','Active'),(20,'259864589','Dhruv','Patel','Summit Ave','ABC','6824597845',8635,'2027-11-19','Active');
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-19 22:43:32
