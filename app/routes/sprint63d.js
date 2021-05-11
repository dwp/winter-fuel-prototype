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
  
// large to size
router.post('/sprint63d/large', (req, res) => {
  res.redirect('large-print')
});

// Large Print Size to Bold
router.post('/sprint63d/large-print', (req, res) => {
  res.redirect('bold')
});

// Bold to contact
router.post('/sprint63d/bold', (req, res) => {
  res.redirect('contact')
});

  module.exports = router;