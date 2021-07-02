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

// Address to move date

router.post('/sprint68/address', (req, res) => {
  res.redirect('/sprint68/move-date')
})
;

// Move date to living with

router.post('/sprint68/move-date', (req, res) => {
  res.redirect('/sprint68/living-with')
})
;

// Living with anyone at address change
router.post('/sprint68/living-with', function(req, res) {
  if (req.body['living-with'] === 'Lives with someone else who gets Winter Fuel Payment') {
    res.redirect('living-with-age');
  } else {
    res.redirect('living-with-date');
  }
});

router.post('/sprint68/living-with-age', function(req, res) {
  if (req.body['before-1954'] === 'Yes') {
    res.redirect('living-with-over-80');
  } else {
    res.redirect('living-with-date');
  }
});

// Living with age back to contact
router.post('/sprint68/living-with-over-80', (req, res) => {
  res.redirect('/sprint68/living-with-date')
});

// Living with to
router.post('/sprint68/living-with-date', (req, res) => {
  res.redirect('declaration')
})
;


// Home phone number removal
router.post('/sprint68/homephone-remove', function(req, res) {
  if (req.body['homephone-remove'] === 'Yes') {
    res.redirect('declaration');
  } else {
    res.redirect('homephone-address');
  }
});

// Declaration to confirmation

router.post('/sprint68/declaration', (req, res) => {
  res.redirect('/sprint68/overview-changed')
})
;

// Bank type to bank details
router.post('/sprint68/bank-type', function(req, res) {
  if (req.body['bank-account-type'] === 'uk') {
    res.redirect('bank-details-uk');
  } else {
    res.redirect('bank-details-ig');
  }
});

// Bank details to payment
router.post('/sprint68/bank-details-uk', (req, res) => {
  res.redirect('/sprint68/payment-changed')
})
;

// Bank details to payment
router.post('/sprint68/bank-details-ig', (req, res) => {
  res.redirect('/sprint68/payment-changed')
})
;



module.exports = router;
