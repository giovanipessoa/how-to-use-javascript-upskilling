const express = require("express");
const router = express.Router();

// route to test errors
router.get("/error", (req, res, next) => {
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

module.exports = router;
