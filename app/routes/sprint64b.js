const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })


  router.use((req, res, next) => {
  res.locals.back = req.headers.referer
  next()
})


// Referral to get next
router.post('/sprint64b/task-lists', (req, res) => {
  res.redirect('/sprint64b/alternative-format')
})
;


  // Referral to get next
  router.post('/sprint64b/alternative-format', (req, res) => {
    res.redirect('/sprint64b/next-task')
  })
  ;


  module.exports = router;
