CREATE DATABASE IF NOT EXISTS vidora_db;
CREATE TABLE IF NOT EXISTS sapatos(
      ID int NOT NULL AUTO_INCREMENT,
      nome varchar(150) NOT NULL,
      marca varchar(150) NOT NULL,
      preco decimal(1000,2) NOT NULL,
      PRIMARY KEY (ID)
);