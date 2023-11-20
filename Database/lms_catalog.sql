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
-- Table structure for table `catalog`
--

DROP TABLE IF EXISTS `catalog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `catalog` (
  `CatalogID` int NOT NULL,
  `Author` varchar(255) DEFAULT NULL,
  `Title` varchar(255) DEFAULT NULL,
  `SubjectArea` varchar(255) DEFAULT NULL,
  `Description` text,
  `ISBN` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`CatalogID`),
  KEY `catalog_ibfk_1` (`ISBN`),
  CONSTRAINT `catalog_ibfk_1` FOREIGN KEY (`ISBN`) REFERENCES `books` (`ISBN`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalog`
--

LOCK TABLES `catalog` WRITE;
/*!40000 ALTER TABLE `catalog` DISABLE KEYS */;
INSERT INTO `catalog` VALUES (1,'Khaled Hosseini','The Kite Runner','Fiction','A novel about friendship, betrayal, and redemption set in Afghanistan.','978-0060935467'),(2,'Harper Lee','To Kill a Mockingbird','Fiction','A Pulitzer Prize-winning novel set in the American South.','978-0061120084'),(3,'J.R.R. Tolkien','The Hobbit','Fantasy','A fantasy novel that follows the journey of Bilbo Baggins.','978-0140283334'),(4,'Carlos Ruiz Zafón','The Shadow of the Wind','Mystery','A novel that intertwines love, literature, and mystery in post-war Barcelona.','978-0143039433'),(5,'Stieg Larsson','The Girl with the Dragon Tattoo','Mystery','A gripping mystery novel that involves a journalist and a hacker.','978-0307454544'),(6,'J.D. Salinger','The Catcher in the Rye','Fiction','A classic novel about teenage angst.','978-0316769488'),(7,'S.E. Hinton','The Outsiders','Young Adult','A coming-of-age novel that explores the struggles of teenagers in the 1960s.','978-0316769490'),(8,'Jonathan Franzen','The Corrections','Fiction','A family saga that explores the dynamics of a dysfunctional family.','978-0375411557'),(9,'Aldous Huxley','Brave New World','Dystopian','A dystopian novel that explores a future society where people are controlled through pleasure.','978-0385472579'),(10,'Jane Austen','Pride and Prejudice','Romance','A novel of manners during the early 19th century in England.','978-0451524935'),(11,'Jane Austen','Emma','Romance','A novel about youthful hubris and romantic misunderstandings.','978-0553213481'),(12,'Yann Martel','Life of Pi','Adventure','A novel that explores themes of survival and spirituality.','978-0743247544'),(13,'Cormac McCarthy','The Road','Post-apocalyptic','A novel that follows a father and son\'s journey through a post-apocalyptic world.','978-0743273565'),(14,'Harper Lee','To Kill a Mockingbird','Fiction','A Pulitzer Prize-winning novel set in the American South.','978-0987654321'),(15,'F. Scott Fitzgerald','The Great Gatsby','Classic','A novel about the American Dream in the 1920s.','978-1122334455'),(16,'J.D. Salinger','The Catcher in the Rye','Fiction','A classic novel about teenage angst.','978-1234567890'),(17,'Dan Brown','The Da Vinci Code','Mystery','A gripping mystery novel that explores art and religion.','978-1400033423'),(18,'George Orwell','1984','Dystopian','A classic dystopian novel exploring themes of totalitarianism.','978-9876543210');
/*!40000 ALTER TABLE `catalog` ENABLE KEYS */;
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
