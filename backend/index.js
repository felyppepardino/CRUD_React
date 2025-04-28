// Ponto de entrada do aplicativo. Aqui estarão a abertura da porta e configurações da API

import express from "express";
import cors from "cors";
import userRouters from "./Routes/users.js";

const app = express();

// Para que a nossa API utilize o padrão JSON e o cors
app.use(express.json());
app.use(cors());

app.use("/listarusuarios", userRouters);
app.use("/consultarusuarios", userRouters);
app.use("/criarusuarios", userRouters);
app.use("/editarusuarios", userRouters);
app.use("/excluirusuarios", userRouters)

app.get("/", (req, res) => {
    res.send("funcionando");
  });  

// Para que a escuta seja realizada na porta 8800; mas poderia ser qualquer outra porta. Abre a porta 8800 
app.listen(8800);