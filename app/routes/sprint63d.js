const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// alt format to updated contact
router.post('/sprint63d/alt', (req, res) => {
  res.redirect('contact')
});



module.exports = router;
