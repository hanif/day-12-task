module.exports = () => {
  return (err, req, res, next) => {
    // eslint-disable-next-line no-console
    console.error(err.stack);

    res.status(500);
    res.render('_errors/500', { title: 'Oops!', message: err.message });
  };
};
