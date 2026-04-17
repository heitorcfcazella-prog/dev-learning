let posts = [
  {id: 1, title: 'Post Um'},
  {id: 2, title: 'Post Dois'},
  {id: 3, title: 'Post Três'}
];

// @desc Pega todos os posts
// @route GET/api/posts
const getPosts = (req, res, next) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0){
    res.status(200).json(posts.slice(0, limit));
  } else {
    res.status(200).json(posts);
  }
  
};

// @desc Pegar um post
// @route GET/api/posts/:id
const getPost = (req, res, next) => {
  const id = parseInt(req.params.id)
  const post = posts.find((post) => post.id === id);
  
  if (!post){
    const error = new Error(`Não achamos o post ${id}`);
    error.status = 404;
    return next(error);
  }
  
  // else{
  //    res.status(200).json(posts.filter((post) => post.id === id));
  //}

  res.status(200).json(post);
  
}

// @desc Criar um post
// @route POST /api/posts
const createPost = (req, res, next) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title
  };

  if(!newPost.title){
    const error = new Error(`Coloca o titulo ai fi`);
    error.status = 400;
    return next(error);
  }

  posts.push(newPost);
  //console.log(req.body);

  res.status(201).json(posts);
}

// @desc Atualizar um post
// @route PUT /api/posts/:id
const updatePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((posts) => posts.id === id);

  if (!post){
    const error = new Error(`Não achamos o post ${id}`);
    error.status = 404;
    return next(error);
  }

  post.title = req.body.title;
  res.status(200).json(post);
}

// @desc Deletar um post
// @route DELETE /api/posts/:id
const deletePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((posts) => posts.id === id);

  if (!post){
    const error = new Error(`Não achamos o post ${id}`);
    error.status = 404;
    return next(error);
  }

  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
}

module.exports = { getPosts, getPost, createPost, updatePost, deletePost };