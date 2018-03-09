module.exports = () => {
  // eslint-disable-next-line no-unused-vars
  return (req, res, next) => {
    res.status(404);
    res.render('_errors/404', { title: 'Not Found' });
  };
};
