CREATE TABLE activities (
  `id` int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `image` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` TEXT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;




CREATE TABLE populars (
  `id` int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `picture` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` TEXT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

