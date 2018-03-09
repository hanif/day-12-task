const express = require('express');
const DefaultCtl = require('./controllers/default');

const router = express.Router();

router.get('/', DefaultCtl.homepage);
router.get('/even-fibo', DefaultCtl.showEvenFiboForm);
router.post('/even-fibo', DefaultCtl.calculateEvenFibo);
router.get('/largest-prime-factor', DefaultCtl.showLargestPrimeFactorForm);
router.post('/largest-prime-factor', DefaultCtl.calculateLargestPrimeFactor);
router.get('/error', DefaultCtl.error);

module.exports = router;
