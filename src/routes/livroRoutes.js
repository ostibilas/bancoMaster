const express = require("express");
const router = express.Router();
const { livroController } = require("../controllers/livroController.js");

router.get("/livros", livroController.listarLivros);
router.post("/livros", livroController.criarLivro);

module.exports = {livroRoutes: router};
