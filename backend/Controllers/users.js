// Consulta / comunicação do back-end com o banco de dados

/*
É bom deixar, para cada tabela do banco de dados, um arquivo de controller específico. Por exemplo, aqui a minha tabela é de 
usuários; portanto, users.js para realizar as consultas nesta tabela
*/

import {db} from "../db.js"

// Aqui o _ no primeiro parâmetro se dá porque, sendo um get, não vamos enviar nenhum parâmetro, só teremos a resposta
export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios";

    db.query(q, (err, data) => {
        // Se a variável err tiver valor, ou seja, se houver erro, ele já retorna o json da resposta com o erro para o front-end
        if(err) return res.json(err);

        // Senão, eu faço um status 200 e mando um json com os dados
        return res.status(200).json(data);
    });
}

export const checkUser = (req, res) => {
    let cpf = req.body.cpf;
    const q = `SELECT * FROM usuarios WHERE cpf=${cpf}`;

    db.query(q, (err, data) => {
        if(err) return res.json(err);
        
        return res.status(200).json(data);
    });
}

export const createUser = (req, res) => {
    const nome = req.body.nome;
    const idade = req.body.idade;
    const cpf = req.body.cpf;
    const email = req.body.email;
    const sexo = req.body.sexo;

    const q = `INSERT INTO usuarios (nome, idade, cpf, email, sexo) VALUES ("${nome}", ${idade}, "${cpf}", "${email}", "${sexo}");`;

    db.query(q, (err, data) => {
        if(err) return res.json(err);
        
        return res.status(200).json(data);
    });
}

export const editUser = (req, res) => {
    const { id, nome, idade, email, sexo } = req.body;

    let campos_a_editar = [];

    if(nome) campos_a_editar.push(`nome="${nome}"`);
    if(idade) campos_a_editar.push(`idade="${idade}"`);
    if(email) campos_a_editar.push(`email="${email}"`);
    if(sexo) campos_a_editar.push(`nome="${sexo}"`);

    const q = `UPDATE usuarios SET ${campos_a_editar.join(", ")} WHERE id=${id}`;

    db.query(q, (err, data) => {
        if(err) return res.json(err);
        
        return res.status(200).json(data);
    });
}

export const deleteUser = (req, res) => {
    const id = req.params.id;
    let q = `DELETE FROM usuarios WHERE id=${id}`;

    db.query(q, (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });

}