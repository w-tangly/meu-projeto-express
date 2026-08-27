import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    date: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
    status: 'API no Render funcionando!',
  });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});