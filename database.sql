CREATE TABLE `Customer` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50),
  `location` VARCHAR(50),
  `note` VARCHAR(50),
   PRIMARY KEY (`id`)
);
INSERT INTO `Customer` (`name`, `location`,`note`) VALUES ('ambili', 'dubai','xyz');
INSERT INTO `Customer` (`name`, `location`,`note`) VALUES ('anu', 'dubai','break down');
INSERT INTO `Customer` (`name`, `location`,`note`) VALUES ('ambili', 'dubai','oil change');