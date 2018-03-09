module.exports = () => {
  return (err, req, res, next) => {
    res.locals = res.locals || {};
    next();
  };
};
