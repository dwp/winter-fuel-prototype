const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Teleclaim or postal claim to find
router.post('/sprint63e/application-type', (req, res) => {
  res.redirect('/sprint63e/find')
});

// Find to name
router.post('/sprint63e/find', function(req, res) {
  if (req.session.data["nino"] === "HU 12 34 57") {
    res.redirect('date-of-birth');
  } else {
    res.redirect('confirm-name');
  }
});


// Confirm name to DOB/international record/address
router.post('/sprint63e/confirm-name', function(req, res) {
  if (req.session.data["nino"] === "AB 12 34 57") {
    res.redirect('international-record');
  } else if (req.session.data['nino'] === "HU 12 34 57") {
    res.redirect('date-of-birth');
  } else {
    res.redirect('address');
  }
});

// Date of birth to address/too young
router.post('/sprint63e/date-of-birth', function(req, res) {
  if (req.session.data["dob-year"] === "1965") {
    res.redirect('too-young-post');
  } else if (req.session.data['dob-year'] === "1964") {
    res.redirect('too-young-phone');
  } else {
    res.redirect('address');
  }
});

// Address to move date
router.post('/sprint63e/address', (req, res) => {
  res.redirect('/sprint63e/move-date')
});

// Address - If living with someone go to living with details. If Move date is after Q week, ask about prev add.
router.post('/sprint63e/move-date', (req, res) => {
  res.redirect('/sprint63e/living-with')
});


// Living with details to contact or q week address
router.post('/sprint63e/living-with', function(req, res) {
  if (req.session.data['move-month'] === "9") {
    res.redirect('address-q-week');
  } else {
    res.redirect('wf-payment');
  }
});


// Address Q week to contact details
router.post('/sprint63e/address-q-week', (req, res) => {
  res.redirect('/sprint63e/wf-payment')
});


// Contact details to bank details
router.post('/sprint63e/wf-payment', (req, res) => {
  res.redirect('/sprint63e/contact')
});


// Contact details to bank details
router.post('/sprint63e/contact', (req, res) => {
  res.redirect('/sprint63e/bank-details')
});

// Bank details to UK bank Q or countries lived in details

router.post('/sprint63e/bank-details', function(req, res) {
  if (req.session.data["bank-account-type"] === "uk-bank") {
    res.redirect('lived-worked');
  } else {
    res.redirect('uk-bank');
  }
});


// UK bank account Q to countries lived in details
router.post('/sprint63e/uk-bank', (req, res) => {
  res.redirect('/sprint63e/lived-worked')
});

// Lived and worked to UK national
router.post('/sprint63e/lived-worked', (req, res) => {
  res.redirect('/sprint63e/uk-national')
});

// UK National to UK property
router.post('/sprint63e/uk-national', (req, res) => {
  res.redirect('/sprint63e/uk-property')
});
    

// 1st nationality to 2nd nationality Q
router.post('/sprint63e/1st-nationality', (req, res) => {
  res.redirect('/sprint63e/uk-property')
});

// UK property to UK business
router.post('/sprint63e/uk-property', (req, res) => {
  res.redirect('/sprint63e/uk-business')
});

// UK business to UK family
router.post('/sprint63e/uk-business', (req, res) => {
  res.redirect('/sprint63e/uk-family')
});

// UK family to UK healthcare professional
router.post('/sprint63e/uk-family', (req, res) => {
  res.redirect('/sprint63e/uk-healthcare')
});

// UK healthcare to returning to the UK in past 3 years
router.post('/sprint63e/uk-healthcare', (req, res) => {
  res.redirect('/sprint63e/returning-to-uk')
});

// Returning to the UK in past 3 years to
router.post('/sprint63e/returning-to-uk', (req, res) => {
  res.redirect('/sprint63e/2nd-nationality-q')
});

// 2nd nationality (yes) to capture or (no) to uk property
router.post('/sprint63e/2nd-nationality-q', function(req, res) {
  if (req.body['2nd-nationality-q'] === 'yes') {
    res.redirect('2nd-nationality');
   } else if (req.body['2nd-nationality-q uk-national'] === 'no') {
    res.redirect('2nd-no');
   } else {
    res.redirect('benefits-outside');
  }
});

// IF 2nd-nationality-q is YES go to 2nd-nationality. 
// IF 2nd-nationality-q is NO [and uk-national (earlier) is also NO] go to 2nd-no
// IF 2nd-nationality-q is NO [and uk-national (earlier) is YES] go to benefits-outside

// 2nd-nationality-q = Are you a national of any other countries?
// uk-national = Are you a UK national?
// 2nd-no = Select all that apply (checkboxes)

// 2nd nationality to date
router.post('/sprint63e/2nd-nationality', (req, res) => {
  res.redirect('/sprint63e/2nd-nationality-date')
});

// 2nd nationality to uk property
router.post('/sprint63e/2nd-no', (req, res) => {
  res.redirect('/sprint63e/benefits-outside')
});

// 2nd nationality to uk property
router.post('/sprint63e/2nd-nationality-date', (req, res) => {
  res.redirect('/sprint63e/benefits-outside')
});

// Benefits outside the UK to questions about qualifying week
router.post('/sprint63e/benefits-outside', (req, res) => {
  res.redirect('/sprint63e/qualifying-week')
});


// Questions about qualifying week to any other links to the UK?
router.post('/sprint63e/qualifying-week', (req, res) => {
  res.redirect('/sprint63e/any-other-links')
});

// Any other links to declaration
router.post('/sprint63e/any-other-links', (req, res) => {
  res.redirect('/sprint63e/check-change')
});

// Any other links to declaration
router.post('/sprint63e/check-change', (req, res) => {
  res.redirect('/sprint63e/declaration')
});

// Declaration to THE END!
router.post('/sprint63e/declaration', (req, res) => {
  res.redirect('/sprint63e/complete')
});

// THE END back to the start!
router.post('/sprint63e/complete', (req, res) => {
  res.redirect('/sprint63e/application-type')
});



module.exports = router;
