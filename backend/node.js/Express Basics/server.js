require('dotenv').config();

const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const posts = require('./routes/post');
const logger = require('./middleware/login');
const errorHandler = require('./middleware/error');
const notFound = require('./middleware/notFound')

const app = express();

//Body parser middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Middleware do logger
app.use(logger);


//setup pasta estática
//coloca .html no final da página que não seja a principal

app.use(express.static(path.join(__dirname, 'public')));

/*

app.get('/', (req, res) => {
  //res.send('<h1 style="font-family: Arial;">Olá Mundo!</h1>');
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});
*/

//Rota
app.use('/api/posts', posts);

//Erro
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));