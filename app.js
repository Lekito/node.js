const express = require("express");

const app = express();

app.get("/", (require, response) => {
    response.send("Olá Mundo!");
});

app.get("/contato/:id", (require, response) => {
    const id = require.params.id;
    const sit = require.query.sit;
    return response.json({
        id: id,
        nome: "Alex",
        sit: sit
    });
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080!")
})