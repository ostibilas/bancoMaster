const express = require("express");
const app = express();
const {livroRoutes} = require("./src/routes/livroRoutes");
const PORT = 8081;

app.use(express.json());// configurando o midleway para aceitar o json
app.use('/', livroRoutes);



app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
//teste