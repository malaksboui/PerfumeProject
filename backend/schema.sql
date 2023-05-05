CREATE DATABASE IF NOT EXISTS perfumes;

USE perfumes;

CREATE TABLE IF NOT EXISTS perfume (
  idperfume INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  brand VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL
);