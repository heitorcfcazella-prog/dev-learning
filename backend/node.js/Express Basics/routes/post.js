const express = require('express');
const router = express.Router();

let posts = [
  {id: 1, title: 'Post Um'},
  {id: 2, title: 'Post Dois'},
  {id: 3, title: 'Post Três'}
];

/*
Configuração a nível individual

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.protocol}//${req.get('host')}${req.originalUrl}`);
  next();
}
  */

// Pegar todos os posts
router.get('/', (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0){
    res.status(200).json(posts.slice(0, limit));
  } else {
    res.status(200).json(posts);
  }
  
});

// Pegar um post
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const post = posts.find((post) => post.id === id);
  
  if (!post){
    return res.status(404).json({msg: `Um post com o ID: ${id} não foi encontrado`})
  }
  
  // else{
  //    res.status(200).json(posts.filter((post) => post.id === id));
  //}

  res.status(200).json(post);
  
});


//Criar novo post
router.post('/', (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title
  };

  if(!newPost.title){
    return res.status(400).json({ msg: 'Coloca um título, pufavo'})
  }

  posts.push(newPost);
  //console.log(req.body);

  res.status(201).json(posts);
});

//Atualizar o post
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((posts) => posts.id === id);

  if (!post){
    return res.status(404).json({msg: `Um post com o ID: ${id} não foi encontrado`});
  }

  post.title = req.body.title;
  res.status(200).json(post);
});

//Deletar o post
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((posts) => posts.id === id);

  if (!post){
    return res.status(404).json({msg: `Um post com o ID: ${id} não foi encontrado`});
  }

  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
});

module.exports = router;