const express = require("express");

const app = express();

app.get("/", (require, response) => {
    response.send("Olá Mundo!");
});

app.get("/contato", (require, response) => {
    response.send("Página de contatos.");
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080!")
})