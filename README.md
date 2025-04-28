# Trabalho 1 - CRUD com React, Node.js com Express e MySQL

## Sistema de Gerenciamento de Usuários

Projeto de React.js para consultar, editar e excluir usuários cadastrados em um banco de dados MySQL, com backend Node.js/Express.

## Tecnologias

- React.js (frontend)
- Node.js + Express (backend)
- MySQL

## Como rodar o projeto

### 1. Backend
- Acesse a pasta do backend
- Instale as dependências:
  ```bash
  npm install

- Rode o servidor:
  ```bash
  npm start

O backend estará disponível por padrão em: `http://localhost:8800`

### 2. Frontend

- Acesse a pasta do frontend
- Instale as dependências:
  ```bash
  npm install

O frontend estará disponível por padrão em: `http://localhost:3000`

### 3. Banco de dados

- Crie o banco de dados e a tabela de usuários no MySQL:

```sql
CREATE DATABASE crud;
```

```sql
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `idade` int unsigned DEFAULT NULL,
  `cpf` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `sexo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cpf_UNIQUE` (`cpf`),
  UNIQUE KEY `email_UNIQUE` (`email`)
)
```

Altere o arquivo `db.js` com base nas suas próprias configurações locais:

```js
export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sua_senha",
    database: "crud"
});
```

- Projeto desenvolvido para a disciplina de Experiência Criativa: Inovando Colaborativamente.
