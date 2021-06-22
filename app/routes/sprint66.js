const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


router.post('/sprint66/tasks', (req, res) => {
  res.redirect('/sprint32c/address-1')
});

// GSL return to queue

router.post('/sprint66/return-queue', (req, res) => {
  res.redirect('/sprint66/tasks-3-returned')
});

// GSL TASK TWOOOOOOOO
router.post('/sprint66/tasks-2', (req, res) => {
  res.redirect('/sprint56/bank-task')
});

// GSL TASK ONEEEE


router.post('/sprint66/tasks-3', (req, res) => {
  res.redirect('/sprint66/gsl-task')
});

router.post('/sprint66/tasks-4', (req, res) => {
  res.redirect('/sprint47b/overpayment-referral')
});


router.post('/sprint66/gsl-task', function(req, res) {
  if (req.session.data["gsl-decision"] === "approved") {
    res.redirect('form');
  } else {
    res.redirect('tasks-3-not-approved-3');
  }
});

router.post('/sprint66/form', function(req, res) {
  if (req.session.data["form"] === "yes") {
    res.redirect('WA');
  } else {
    res.redirect('form-no');
  }
});

router.post('/sprint66/form-no', (req, res) => {
  res.redirect('/sprint66/tasks-approved-2')
});

router.post('/sprint66/WA', function(req, res) {
  if (req.session.data["WA"] === "yes") {
    res.redirect('tasks-approved');
  } else {
    res.redirect('tasks-not-approved');
  }
});

// GSL TASK TWOOOOOO

router.post('/sprint66/tasks-3-approved', (req, res) => {
  res.redirect('/sprint66/gsl-task-2')
});

router.post('/sprint66/tasks-3-not-approved', (req, res) => {
  res.redirect('/sprint66/gsl-task-2')
});

router.post('/sprint66/gsl-task-2', function(req, res) {
  if (req.session.data["gsl-decision"] === "approved") {
    res.redirect('tasks-3-approved-2');
  } else {
    res.redirect('tasks-3-not-approved-2');
  }
});


// GSL TASK THREEEEEE

router.post('/sprint66/tasks-3-approved-2', (req, res) => {
  res.redirect('/sprint66/gsl-task-3')
});

router.post('/sprint66/tasks-3-not-approved-2', (req, res) => {
  res.redirect('/sprint66/gsl-task-3')
});

router.post('/sprint66/gsl-task-3', function(req, res) {
  if (req.session.data["gsl-decision"] === "approved") {
    res.redirect('/sprint45b/overview-gsl-approved-pre');
  } else {
    res.redirect('/sprint45b/overview-gsl-not-approved');
  }
});

// TASK 5 - DEATH ARREARS

router.post('/sprint66/tasks-5', (req, res) => {
  res.redirect('/sprint50/death-arrears-task-1')
});






module.exports = router;
