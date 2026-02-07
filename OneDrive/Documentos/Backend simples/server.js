const express = require("express");

const app = express();
const port = 3000;

// rota GET
app.get("/", (req, res) => {
  res.json({
    mensagem: "hello!"
  });
});

// iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
