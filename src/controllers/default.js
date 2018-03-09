const calc = require('../util/calculator');

module.exports = class DefaultCtl {
  /**
   * GET /error
   * Sample error page
   */
  static error(req, res, next) {
    next(new Error('This page is a sample error page.'));
  }

  /**
   * GET /
   * Display homepage, which is basically redirected to `/even-fibo` page
   */
  static homepage(req, res, next) {
    res.redirect('/even-fibo');
  }

  /**
   * GET /even-fibo
   * Display even fibo form
   */
  static showEvenFiboForm(req, res, next) {
    res.locals.navId = 'even-fibo';
    res.render('default/even-fibo.pug', res.locals);
  }

  /**
   * POST /even-fibo
   * Calculate even fibo numbers based on user input
   */
  static calculateEvenFibo(req, res, next) {
    if (isNaN(req.body.num)) {
      return next(new Error('Please input a valid number'));
    }

    res.locals.num = req.body.num ? req.body.num : '';
    res.locals.evenFibo = calc.evenFibo(req.body.num).join(', ');
    DefaultCtl.showEvenFiboForm(req, res, next);
  }

  /**
   * GET /largest-prime-factor
   * Display largest prime factor form
   */
  static showLargestPrimeFactorForm(req, res, next) {
    res.locals.navId = 'largest-prime-factor';
    res.render('default/largest-prime-factor.pug', res.locals);
  }

  /**
   * POST /largest-prime-factor
   * Calculate largest prime factor of a number based on user input
   */
  static calculateLargestPrimeFactor(req, res, next) {
    if (isNaN(req.body.num) || req.body.num < 2) {
      return next(new Error('Please input a valid number that is greater than 1'));
    }

    res.locals.num = req.body.num ? req.body.num : '';
    res.locals.largestPrimeFactor = Math.max(...calc.factorsOf(req.body.num).filter(calc.isPrime));
    DefaultCtl.showLargestPrimeFactorForm(req, res, next);
  }
};
