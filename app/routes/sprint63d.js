const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// alt format to contact
  router.post('/sprint63d/alt', function(req, res) {
    if (req.body['alternative-format'] === 'Welsh language') {
      res.redirect('large');
    } else if (req.body['alternative-format'] === 'Large print') {
      res.redirect('large-print');
    } else {
      res.redirect('contact');
    }
  });
  

// large YES to size, NO to bold
router.post('/sprint63d/large', function(req, res) {
  if (req.body['large'] === 'yes') {
    res.redirect('large-print');
  } else {
    res.redirect('bold');
  }
});

// large print to bold
router.post('/sprint63d/large-print', (req, res) => {
  res.redirect('bold')
});

// Bold to contact
router.post('/sprint63d/bold', (req, res) => {
  res.redirect('contact')
});

  module.exports = router;