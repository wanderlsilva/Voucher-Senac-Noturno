CREATE DATABASE blog;

USE blog;

CREATE TABLE usuarios(
id_usuario INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE posts(
id_post INT AUTO_INCREMENT PRIMARY KEY,
usuario_id INT NOT NULL,
titulo VARCHAR(255) NOT NULL,
texto TEXT NOT NULL,
FOREIGN KEY (usuario_id) REFERENCES usuarios(id_usuario)
);

CREATE TABLE comentarios(
id_comentario INT AUTO_INCREMENT PRIMARY KEY,
post_id INT NOT NULL,
comentario TEXT NOT NULL,
FOREIGN KEY (post_id) REFERENCES posts(id_post)
);