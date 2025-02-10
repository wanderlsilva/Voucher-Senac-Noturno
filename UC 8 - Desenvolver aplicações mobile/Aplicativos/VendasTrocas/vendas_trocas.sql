CREATE DATABASE vendas_trocas;
USE vendas_trocas;

-- Tabela de usuários
CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    telefone VARCHAR(15),
    localizacao VARCHAR(100),
    foto_perfil VARCHAR(255),
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de produtos
CREATE TABLE produtos (
    id_produto INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    categoria VARCHAR(50),
    estado VARCHAR(20),
    preco DECIMAL(10,2),
    foto VARCHAR(255),
    disponivel BOOLEAN DEFAULT TRUE,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id_usuario)
);

-- Tabela de anúncios
CREATE TABLE anuncios (
    id_anuncio INT AUTO_INCREMENT PRIMARY KEY,
    produto_id INT NOT NULL,
    tipo VARCHAR(10) NOT NULL, -- 'venda' ou 'troca'
    status VARCHAR(20) DEFAULT 'ativo', -- 'ativo' ou 'finalizado'
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (produto_id) REFERENCES produtos(id_produto)
);

-- Tabela de mensagens
CREATE TABLE mensagens (
    id_mensagem INT AUTO_INCREMENT PRIMARY KEY,
    remetente_id INT NOT NULL,
    destinatario_id INT NOT NULL,
    anuncio_id INT NOT NULL,
    mensagem TEXT NOT NULL,
    data_envio DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (remetente_id) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (destinatario_id) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (anuncio_id) REFERENCES anuncios(id_anuncio)
);

-- Tabela de transações
CREATE TABLE transacoes (
    id_transacao INT AUTO_INCREMENT PRIMARY KEY,
    anuncio_id INT NOT NULL,
    comprador_id INT NOT NULL,
    vendedor_id INT NOT NULL,
    tipo VARCHAR(10) NOT NULL, -- 'venda' ou 'troca'
    status VARCHAR(20) DEFAULT 'pendente', -- 'pendente' ou 'concluída'
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (anuncio_id) REFERENCES anuncios(id_anuncio),
    FOREIGN KEY (comprador_id) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (vendedor_id) REFERENCES usuarios(id_usuario)
);