const notFound = ((req, res, next) => {
  const error = new Error('Achei não');
  error.status = 404;
  next(error);
})

module.exports = notFound;
