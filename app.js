const { request } = require("express");
const express = require("express");

const app = express();

app.use(express.json());

const contatos = ['Alex', 'Kelly', 'Jessica', 'Marcos',  ];

app.get("/", (require, response) => {
    return response.json(contatos);
});

app.get("/contatos", (require, response) => {
    return response.json(contatos);
});

app.get("/contatos/:id", (require, response) => {
    const {id} = require.params;
    return response.json({
        id: id,
        nome: contatos[id]
    });
});

app.post("/contatos", (require, response) => {
    const {nome} = require.body;

    contatos.push(nome);

    return response.json(contatos)
});

app.put("/contatos/:id", (require, response) => {
    const { id } = require.params;
    const { nome } = require.body;

    contatos[id] = nome;

    return response.json(contatos);
});

app.delete("/contatos/:id", (require, response) => {
    const { id } = require.params;

    contatos.splice(id, 1); // para excluir somete uma posição do array usando o splice()

    return response.json(contatos);

})

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080! http://localhost:8080/contatos/")
})