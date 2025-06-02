require("dotenv").config();
const express = require("express");
const { createError, errorHandler } = require("./errors");
const app = express();
const port = 3000;

// middleware to process json
app.use(express.json());

// main route
app.get("/", (req, res) => {
    res.json({ message: "Bem-vindo à minha aplicação Node.js!" });
});

// errors route to test
app.get("/errors", (req, res, next) => {
    // 404 error example
    if (req.query.type === "404") {
        return next(createError("Recurso não encontrado", 404));
    }

    // 400 error example
    if (req.query.type === "400") {
        return next(createError("Requisição inválida", 400));
    }

    // 500 error example
    if (req.query.type === "500") {
        return next(createError("Erro interno do servidor", 500));
    }

    // if none type of error is specified, return a errors list available
    res.json({
        message: "Teste de erros disponíveis",
        erros: [
            { tipo: "404", descricao: "Recurso não encontrado" },
            { tipo: "400", descricao: "Requisição inválida" },
            { tipo: "500", descricao: "Erro interno do servidor" },
        ],
    });
});

// middleware to handle errors (must be the last middleware)
app.use(errorHandler);

// start the server
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
