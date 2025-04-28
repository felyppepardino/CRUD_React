// Aqui serão colocadas as credenciais do nosso banco

import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "crud"
});