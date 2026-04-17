const express = require('express');
const { getPosts, getPost, createPost, updatePost, deletePost } = require('../controllers/postController');
const router = express.Router();

/*
Configuração a nível individual

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.protocol}//${req.get('host')}${req.originalUrl}`);
  next();
}
  */

// Pegar todos os posts
router.get('/', getPosts);

// Pegar um post
router.get('/:id', getPost);


//Criar novo post
router.post('/', createPost);

//Atualizar o post
router.put('/:id', updatePost);

//Deletar o post
router.delete('/:id', deletePost);

module.exports = router;