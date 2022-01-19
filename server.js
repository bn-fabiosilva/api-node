const app = require('./config/express')();
const port = app.get('port');

// EXECUTA APLICACAO NA PORTA CONFIGURADA
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});
