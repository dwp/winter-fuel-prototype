const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})




router.post('/sprint63/update-details-options', function(req, res) {
  if (req.session.data["update-details-options"] === "update-details") {
    res.redirect('update-details');
  } else if (req.session.data["update-details-options"] === "dead") {
    res.redirect('date-of-death');
  }
    else if (req.session.data["update-details-options"] === "opt-out") {
  res.redirect('opt-out');
  }
    else if (req.session.data["update-details-options"] === "immigration") {
  res.redirect('immigration');
}
});

// Address -------------------------------------------------------------------
router.post('/sprint63/address', function(req, res) {
  if (req.body['postcode'] === 'NE2 1YL') {
    res.redirect('address-no-result');
  } else if (req.body['postcode'] === "NE65 0AP") {
    res.redirect('address-carehome');
  } else if (req.body['postcode'] === "DH3 4AE") {
    res.redirect('/sprint52c/address-carehome');
  } else {
    res.redirect('address-1');
  }
});

// Address select, yes or search address
router.post('/sprint63/address-1', function(req, res) {
  if (req.body['address-change'] === '27 Kent Street, Amble, NE65 0LZ') {
    res.redirect('move-date');
  } else {
    res.redirect('address-search');
  }
});


// Care home address select, yes or search address
router.post('/sprint63/address-carehome', function(req, res) {
  if (req.body['address-change'] === 'Dolphin View Care Home, Harbour Road, Amble, NE65 0AP') {
    res.redirect('carehome-move-date');
  } else {
    res.redirect('address-search');
  }
});

// Address search
router.post('/sprint63/address-search', function(req, res) {
  if (req.body['address-search-postcode'] === 'NE2 1YL') {
    res.redirect('address-search-no-result');
  } else {
    res.redirect('address-search-result');
  }
});

// Address search select, yes or search address
router.post('/sprint63/address-search-result', function(req, res) {
  if (req.body['address-search-change'] === '27 Kent Street, Amble, NE65 0LZ') {
    res.redirect('move-date');
  } else {
    res.redirect('TBC');
  }
});


// Move date
router.post('/sprint63/move-date', (req, res) => {
  res.redirect('update-anything-else')
});

// Living with anyone at address change
router.post('/sprint63/living-with', function(req, res) {
  if (req.body['living-with'] === 'Lives with someone else who gets Winter Fuel Payment') {
    res.redirect('living-with-age');
  } else {
    res.redirect('living-with-date');
  }
});

// Living with age back to contact
router.post('/sprint63/living-with-age', (req, res) => {
  res.redirect('/sprint63/living-with-date')
});

router.post('/sprint63/living-with-date', (req, res) => {
  res.redirect('update-anything-else')
});


// Living with anyone at address change
router.post('/sprint63/living-with-q-week', function(req, res) {
  if (req.body['living-with-q-week'] === 'Lives with someone else who gets Winter Fuel Payment') {
    res.redirect('living-with-age-q-week');
  } else {
    res.redirect('living-with-date');
  }
});

router.post('/sprint63/homephone', (req, res) => {
  res.redirect('update-anything-else')
});

// Home phone number removal
router.post('/sprint63/homephone-remove', function(req, res) {
  if (req.body['homephone-remove'] === 'Yes') {
    res.redirect('update-anything-else');
  } else {
    res.redirect('homephone');
  }
});

// Power of attourney
router.post('/sprint63/poa', function(req, res) {
  if (req.body['poa'] === 'Yes') {
    res.redirect('poa-people');
  } else {
    res.redirect('update-anything-else');
  }
});

router.post('/sprint63/poa-people', (req, res) => {
  res.redirect('update-anything-else')
});

router.post('/sprint63/update-anything-else', (req, res) => {
  if (req.body['update-details-options'] === 'no') {
   res.redirect('declaration')
  } else if (req.body['update-details-options'] === 'address') {
    res.redirect('address');
  } else if (req.body['update-details-options'] === 'occupancy') {
    res.redirect('living-with');
  } else if (req.body['update-details-options'] === 'home-phone') {
    res.redirect('homephone');
  } else if (req.body['update-details-options'] === 'poa') {
    res.redirect('poa');
  } 
});

router.post('/sprint63/declaration', (req, res) => {
  res.redirect('update-details-changed')
});

module.exports = router;
