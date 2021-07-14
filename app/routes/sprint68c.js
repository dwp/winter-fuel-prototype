const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


router.post('/sprint68c/tasks', (req, res) => {
  res.redirect('/sprint32c/address-1')
});

// GSL return to queue

router.post('/sprint68c/return-queue', (req, res) => {
  res.redirect('/sprint68c/tasks-3-returned')
});

// GSL TASK TWOOOOOOOO
router.post('/sprint68c/tasks-2', (req, res) => {
  res.redirect('/sprint56/bank-task')
});

// GSL TASK ONEEEE


router.post('/sprint68c/tasks-3', (req, res) => {
  res.redirect('/sprint66/gsl-task')
});

router.post('/sprint68c/tasks-4', (req, res) => {
  res.redirect('/sprint47b/overpayment-referral')
});


router.post('/sprint68c/gsl-task', function(req, res) {
  if (req.session.data["gsl-decision"] === "approved") {
    res.redirect('tasks-3-approved');
  } else {
    res.redirect('tasks-3-not-approved');
  }
});


// GSL TASK TWOOOOOO

router.post('/sprint68c/tasks-3-approved', (req, res) => {
  res.redirect('/sprint68c/gsl-task-2')
});

router.post('/sprint68c/tasks-3-not-approved', (req, res) => {
  res.redirect('/sprint68c/gsl-task-2')
});

router.post('/sprint68c/gsl-task-2', function(req, res) {
  if (req.session.data["gsl-decision"] === "approved") {
    res.redirect('tasks-3-approved-2');
  } else {
    res.redirect('tasks-3-not-approved-2');
  }
});


// GSL TASK THREEEEEE

router.post('/sprint68c/tasks-3-approved-2', (req, res) => {
  res.redirect('/sprint68c/gsl-task-3')
});

router.post('/sprint68c/tasks-3-not-approved-2', (req, res) => {
  res.redirect('/sprint68c/gsl-task-3')
});

router.post('/sprint68c/gsl-task-3', function(req, res) {
  if (req.session.data["gsl-decision"] === "approved") {
    res.redirect('/sprint45b/overview-gsl-approved-pre');
  } else {
    res.redirect('/sprint45b/overview-gsl-not-approved');
  }
});

// TASK 5 - DEATH ARREARS

router.post('/sprint68c/tasks-5', (req, res) => {
  res.redirect('/sprint50/death-arrears-task-1')
});

// TASK 6 - 13 week care home

router.post('/sprint68c/tasks-6', (req, res) => {
  res.redirect('/sprint68c/13-week')
});

router.post('/sprint68c/13-week', function(req, res) {
  if (req.session.data["dap"] === "yes") {
    res.redirect('/sprint68c/13-week-yes');
  } else {
    res.redirect('/sprint68c/13-week-no');
  }
});

router.post('/sprint68c/13-week-no', (req, res) => {
  res.redirect('/sprint68c/overview-no')
});

router.post('/sprint68c/13-week-yes', (req, res) => {
  res.redirect('/sprint68c/address-1')
});

// Address select, yes or search address
router.post('/sprint68c/address-1', function(req, res) {
  if (req.body['address-change'] === '35 St Albans Close, Ashington, NE63 9RU') {
    res.redirect('move-date');
  } else {
    res.redirect('address-search');
  }
});

// Address search
router.post('/sprint68c/address-search', function(req, res) {
  if (req.body['address-search-postcode'] === 'NE2 1YL') {
    res.redirect('address-search-no-result');
  } else {
    res.redirect('address-search-result');
  }
});

// Address search select, yes or search address
router.post('/sprint68c/address-search-result', function(req, res) {
  if (req.body['address-search-change'] === '27 Kent Street, Amble, NE65 0LZ') {
    res.redirect('move-date');
  } else {
    res.redirect('TBC');
  }
});

// Move date
router.post('/sprint68c/move-date', (req, res) => {
  res.redirect('/sprint68c/correspondance')
});

router.post('/sprint68c/correspondance', function(req, res) {
  if (req.body['correspondance'] === 'yes') {
    res.redirect('/sprint68c/overview-yes');
  } else {
    res.redirect('/sprint68c/overview-yes-yes');
  }
});



module.exports = router;
