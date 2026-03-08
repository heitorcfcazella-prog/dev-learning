import http from 'http';
const PORT = 8000;

const server = http.createServer((req, res) => {
  res.write('Olá Mundo!');
  res.end();
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});