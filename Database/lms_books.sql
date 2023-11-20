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
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `ISBN` varchar(20) NOT NULL,
  `Title` varchar(255) DEFAULT NULL,
  `Author` varchar(255) DEFAULT NULL,
  `PublishedYear` int DEFAULT NULL,
  `Genre` varchar(255) DEFAULT NULL,
  `Description` text,
  `TotalCopies` int DEFAULT NULL,
  `AvailableCopies` int DEFAULT NULL,
  `IsReferenceBook` tinyint(1) DEFAULT '0',
  `IsRareBook` tinyint(1) DEFAULT '0',
  `IsMap` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`ISBN`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES ('978-0060931111','Toto CHan','Nimanshu',2001,'Comdey','CCBD',5,1,0,0,0),('978-0060932552','The Jurrasic World','Noah',2004,'Mystery','Story About Dinaosaurs',3,1,0,0,0),('978-0060935467','The Kite Runner','Khaled Hosseini',2003,'Fiction','A novel about friendship, betrayal, and redemption set in Afghanistan.',10,8,0,0,0),('978-0061120084','To Kill a Mockingbird','Harper Lee',1960,'Fiction','A Pulitzer Prize-winning novel set in the American South.',15,12,1,0,0),('978-0140283334','The Hobbit','J.R.R. Tolkien',1937,'Fantasy','A fantasy novel that follows the journey of Bilbo Baggins.',10,9,0,0,0),('978-0143039433','The Shadow of the Wind','Carlos Ruiz Zafón',2001,'Mystery','A novel that intertwines love, literature, and mystery in post-war Barcelona.',15,14,0,0,0),('978-0307454544','The Girl with the Dragon Tattoo','Stieg Larsson',2005,'Mystery','A gripping mystery novel that involves a journalist and a hacker.',18,15,0,0,0),('978-0316769488','The Catcher in the Rye','J.D. Salinger',1951,'Fiction','A classic novel about teenage angst.',8,6,0,0,0),('978-0316769490','The Outsiders','S.E. Hinton',1967,'Young Adult','A coming-of-age novel that explores the struggles of teenagers in the 1960s.',10,9,0,0,0),('978-0375411557','The Corrections','Jonathan Franzen',2001,'Fiction','A family saga that explores the dynamics of a dysfunctional family.',12,10,0,0,0),('978-0385472579','Brave New World','Aldous Huxley',1932,'Dystopian','A dystopian novel that explores a future society where people are controlled through pleasure.',15,12,0,0,0),('978-0451524935','Pride and Prejudice','Jane Austen',1813,'Romance','A novel of manners during the early 19th century in England.',12,10,1,0,0),('978-0553213481','Emma','Jane Austen',1815,'Romance','A novel about youthful hubris and romantic misunderstandings.',12,11,1,0,0),('978-0743247544','Life of Pi','Yann Martel',2001,'Adventure','A novel that explores themes of survival and spirituality.',10,8,0,0,0),('978-0743273565','The Road','Cormac McCarthy',2006,'Post-apocalyptic','A novel that follows a father and son\'s journey through a post-apocalyptic world.',10,7,0,0,0),('978-0987654321','To Kill a Mockingbird','Harper Lee',1960,'Fiction','A Pulitzer Prize-winning novel set in the American South.',8,8,1,0,0),('978-1122334455','The Great Gatsby','F. Scott Fitzgerald',1925,'Classic','A novel about the American Dream in the 1920s.',10,5,0,0,0),('978-1234567890','The Catcher in the Rye','J.D. Salinger',1951,'Fiction','A classic novel about teenage angst.',5,3,0,0,0),('978-1234568611','The Big Bull','John Author',2023,'Finance','A new book description.',4,3,0,0,0),('978-1234568649','The Big Bull','John Author',2023,'Finance','A new book description.',4,3,0,0,0),('978-1234568650','The New Book','John Author',2022,'Fiction','A new book description.',5,5,0,0,0),('978-1234569600','The Big Bull','John Author',2023,'Finance','A new book description.',4,3,0,0,0),('978-1400033423','The Da Vinci Code','Dan Brown',2003,'Mystery','A gripping mystery novel that explores art and religion.',20,18,0,0,0),('978-9876543210','1984','George Orwell',1949,'Dystopian','A classic dystopian novel exploring themes of totalitarianism.',8,8,0,1,0);
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-19 22:43:31
