const express = require("express");

const app = express();

const contatos = ['Alex', 'Kelly', 'Jessica', 'Marcos',  ];

app.get("/", (require, response) => {
    return response.json(contatos);
});

app.get("/contato/:id", (require, response) => {
    const {id} = require.params;
    return response.json({
        id: id,
        nome: contatos[id]
    });
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080!")
})