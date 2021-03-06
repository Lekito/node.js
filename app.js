const { request } = require("express");
const express = require("express");

const app = express();

app.use(express.json());

const contatos = ['Alex', 'Kelly', 'Jessica', 'Marcos',  ];

/*app.use((require, response, next) => {
    console.log("Acessou o Middlewares!");
    next()
});*/

function valContato(require, response, next) {
    if(!require.body.nome) {
        return response.status(400).json({
            error: "Necessário enviar um nome!"
        })
    }
    return next();
};

function valPosContato(require, response, next) {
    if(!contatos[require.params.id]) {
        return response.status(400).json({
            error: "Contato não encontrado!"
        });
    }
    return next();
}

app.get("/", (require, response) => {
    return response.json(contatos);
});

app.get("/contatos", (require, response) => {
    return response.json(contatos);
});

app.get("/contatos/:id", valPosContato, (require, response) => {
    const {id} = require.params;
    return response.json({
        id: id,
        nome: contatos[id]
    });
});

app.post("/contatos", valContato, (require, response) => {
    const {nome} = require.body;

    contatos.push(nome);

    return response.json(contatos)
});

app.put("/contatos/:id", valPosContato, valContato, (require, response) => {
    const { id } = require.params;
    const { nome } = require.body;

    contatos[id] = nome;

    return response.json(contatos);
});

app.delete("/contatos/:id", valPosContato, (require, response) => {
    const { id } = require.params;

    contatos.splice(id, 1); // para excluir somete uma posição do array usando o splice()

    return response.json(contatos);

})

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080! http://localhost:8080/contatos/")
})