// Carrega o modulo HTTP do Node
const http = require("http");

//Cria um servidor HTTP e uma escuta de requisições na porta 8000
http.createServer(function (req, res){
//Status HTTP e tipo de conteúdo
  res.writeHead(200, { "Content-Type": "text/plain"});

  res.end("Olá Mundo\n");
}).listen(8000, "127.0.0.1");

console.log("Servidor executando em http://127.0.0.1:8000/");