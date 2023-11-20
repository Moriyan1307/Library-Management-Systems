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
-- Table structure for table `notificationqueue`
--

DROP TABLE IF EXISTS `notificationqueue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notificationqueue` (
  `NotificationID` int NOT NULL AUTO_INCREMENT,
  `MemberID` int DEFAULT NULL,
  `NotificationType` varchar(255) DEFAULT NULL,
  `NotificationText` text,
  `IsRead` tinyint(1) DEFAULT '0',
  `NotificationDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`NotificationID`),
  KEY `MemberID` (`MemberID`),
  CONSTRAINT `notificationqueue_ibfk_1` FOREIGN KEY (`MemberID`) REFERENCES `members` (`MemberID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notificationqueue`
--

LOCK TABLES `notificationqueue` WRITE;
/*!40000 ALTER TABLE `notificationqueue` DISABLE KEYS */;
INSERT INTO `notificationqueue` VALUES (1,1,'Overdue Book','Hello John Doe,\n\nThis is a reminder that the book \"The Catcher in the Rye\" was overdue. Please return it as soon as possible.\n\nDue Date: 2023-01-22',0,'2023-11-20 02:03:29'),(2,1,'Membership Renewal','Hello John Doe,\n\nThis is a reminder to renew your library membership.\nYour current membership will expire on 2023-11-15. Please renew before the expiration date to avoid any inconvenience.',0,'2023-11-20 02:05:10'),(3,17,'Overdue Book','Hello Abraham Dickinson,\n\nThis is a reminder that the book \"Brave New World\" was overdue. Please return it as soon as possible.\n\nDue Date: 2023-10-22',0,'2023-11-20 02:20:19');
/*!40000 ALTER TABLE `notificationqueue` ENABLE KEYS */;
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
