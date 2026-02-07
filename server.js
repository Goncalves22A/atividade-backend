import express from 'express'

const app = express()
const port = 3000

app.use(express.json())

app.post('/produtos', (req, res) => {
  const produto = req.body ?? {}
  res.status(201).json({
    mensagem: 'Produto cadastrado com sucesso.',
    produto,
  })
})

app.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`)
})
