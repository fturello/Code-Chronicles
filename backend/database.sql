-- MySQL dump 10.13  Distrib 8.0.32, for macos13 (arm64)
--
-- Host: localhost    Database: hackathon
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `activities`
--

DROP TABLE IF EXISTS `activities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activities` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `image` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activities`
--

LOCK TABLES `activities` WRITE;
/*!40000 ALTER TABLE `activities` DISABLE KEYS */;
INSERT INTO `activities` VALUES (1,'round-table.png','Visiter la Table Ronde','Explorez le château du légendaire Arthur le saxon et asseyez-vous à la fameuse Table Ronde où les chevaliers discutent de leur quête du graal');
/*!40000 ALTER TABLE `activities` ENABLE KEYS */;
INSERT INTO `activities`
	VALUES (2,'crusader.png','Participer aux croisades ','Défendez le royaume contre les envahisseurs et boutez les païens hors de nos frontières (activité adaptative selon que vous êtes pieux ou païen)');
INSERT INTO `activities`
	VALUES (3,'tournament.png','Combats et tournois, des loisirs spectaculaires','Venez profiter des prochaines festivités lors desquelles de preux chevaliers se disputeront le coeur de la jeune princesse (estomacs sensibles s’abstenir)');
INSERT INTO `activities`
	VALUES (4,'bal.png','Rencontrer des damoiseau et damoiselles','Participez à des rencontres légères et valsez à droite ou à gauche selon ce que votre coeur vous dit (activité adaptative selon votre rang)');
INSERT INTO `activities`
	VALUES (5,'shrek.png','Visiter le marais de Shrek ','Marchez dans les sentiers boueux et visiter la chaumière de l’ogre Shrek, sa compagne la princesse Fiona ainsi que leurs amis l’âne et sa femme la dragonne. ');
INSERT INTO `activities`
	VALUES (6,'minstrel.png','Participer à un festin/bal avec des jongleurs, troubadours et démonstrations d’ours','Valsez au rythme des musiciens et regardez les jongleurs et les ours danser, tout en dégustant un délicieux sanglier rôti à la broche.');
INSERT INTO `activities`
	VALUES (7,'carnival.png','Participer à un carnaval du moyen age ','Participez à un carnaval haut en couleur avec des costumes extravagants et des jongleurs.');
INSERT INTO `activities`
	VALUES (8,'forge.png','S''inscrire à un cours de forge','Apprenez à forger des armes et des armures avec un forgeron expérimenté. Privilégiez la hache, l’épée à une main ou à deux mains selon vos préférences.');
INSERT INTO `activities`
	VALUES (9,'merlin.png','Prendre des cours de magie avec Merlin l’enchanteur','Venez découvrir comment fabriquer des potions magiques ou encore faire disparaître votre belle-mère grâce à un sort. ');
INSERT INTO `activities`
	VALUES (10,'karadoc.png','Manger du jambon avec Karadoc ','Perceval étant en guerroyance, son fidèle ami Karadoc sera fort aise de vous accueillir en sa chaumière');

UNLOCK TABLES;

--
-- Table structure for table `populars`
--

DROP TABLE IF EXISTS `populars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `populars` (
  `id` int NOT NULL AUTO_INCREMENT,
  `picture` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `populars`
--

LOCK TABLES `populars` WRITE;
/*!40000 ALTER TABLE `populars` DISABLE KEYS */;
INSERT INTO `populars` VALUES (1,NULL,'Le Roi Arthur','Roi de l\'île de Bretagne et des pays alliés car détenant Xcaliburn, il siège dans sa place forte de Camelot '),(2,NULL,'Charlemagne','Roi guerrier,  il agrandi son royaume par des campagnes militaires violentes à visée d\'unification religieuse et d\'amour de son prochain.'),(3,NULL,'Mahomet','Il est le Prophète. Si vous êtes en quête de spiitualité, c\'est l\'homme qu\'il vous faut.'),(4,NULL,'Clovis Ier','Clovis I, également connu sous le nom de \"l\'unificateur des Gaules\", était un bouffon notoire pendant son temps libre. Il était connu pour son esprit vif et ses farces hilarantes, laissant souvent sa cour en PLS. \"Il s\'agit de garder le sens de l\'humour, même lorsque vous brandissez une épée.\"'),(5,NULL,'Marco Polo','Sa plus grande découverte ? Comment préparer l\'assiette parfaite de spaghettis à la Polo.'),(6,NULL,'Léovigild','Il a prouvé que le rire est vraiment le meilleur remède et qu\'un peu d\'humour peut faire beaucoup, même quand on tue des gens.'),(7,NULL,'Christophe Colomb','Un chouette film avec Gérard Depardieu.'),(8,NULL,'Jeanne d\'Arc','Assister à son bûcher, “il parait qu’elle est folle mais on sait pas”'),(9,NULL,'Godefroy de Montmirail','Godefroy Amaury de Malefète, comte de Montmirail, d\'Apremont et de Papincourt, dit « le Hardi ». Célèbre pour sa devise \"Que trépasse si je fayblis\",'),(10,NULL,'Jacquouille la fripouille','Jacquouille, dit « la Fripouille », est l\'écuyer de Godefroy de Montmirail, né dans les douves du chateau. Célèbre pour sa dentition et son odeur corporelle,'),(11,NULL,'Shrek','Ogre vert taciturne qui vit seul dans son marais. A vos risques et périls.'),(12,NULL,'Merlin l\'enchanteur','Merlin, Enchanteur de Bretagne, Grand vainqueur de la belette de Winchester, Concepteur de la potion de guérison des ongles incarnés, Auteur du parchemin \"Le Druidisme expliqué aux personnes âgées\"...'),(13,NULL,'Karadoc','Karadoc est un passionné de nourriture, qu\'il considère sacrée, dû à son passé houleux où il fut enfermé sans manger pendant une semaine par des romains. Sa devise : \"Le gras, c\'est la vie\",');
/*!40000 ALTER TABLE `populars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'hackathon'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-02 17:16:14
