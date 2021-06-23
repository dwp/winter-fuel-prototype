const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


router.post('/sprint43b/tasks', (req, res) => {
  res.redirect('/sprint32c/address-1')
});

// GSL return to queue

router.post('/sprint43b/return-queue', (req, res) => {
  res.redirect('/sprint43b/tasks-3-returned')
});

// GSL TASK TWOOOOOOOO
router.post('/sprint43b/tasks-2', (req, res) => {
  res.redirect('/sprint56/bank-task')
});

// GSL TASK ONEEEE


router.post('/sprint43b/tasks-3', (req, res) => {
  res.redirect('/sprint66/gsl-task')
});

router.post('/sprint43b/tasks-4', (req, res) => {
  res.redirect('/sprint47b/overpayment-referral')
});


router.post('/sprint43b/gsl-task', function(req, res) {
  if (req.session.data["gsl-decision"] === "approved") {
    res.redirect('tasks-3-approved');
  } else {
    res.redirect('tasks-3-not-approved');
  }
});


// GSL TASK TWOOOOOO

router.post('/sprint43b/tasks-3-approved', (req, res) => {
  res.redirect('/sprint43b/gsl-task-2')
});

router.post('/sprint43b/tasks-3-not-approved', (req, res) => {
  res.redirect('/sprint43b/gsl-task-2')
});

router.post('/sprint43b/gsl-task-2', function(req, res) {
  if (req.session.data["gsl-decision"] === "approved") {
    res.redirect('tasks-3-approved-2');
  } else {
    res.redirect('tasks-3-not-approved-2');
  }
});


// GSL TASK THREEEEEE

router.post('/sprint43b/tasks-3-approved-2', (req, res) => {
  res.redirect('/sprint43b/gsl-task-3')
});

router.post('/sprint43b/tasks-3-not-approved-2', (req, res) => {
  res.redirect('/sprint43b/gsl-task-3')
});

router.post('/sprint43b/gsl-task-3', function(req, res) {
  if (req.session.data["gsl-decision"] === "approved") {
    res.redirect('/sprint45b/overview-gsl-approved-pre');
  } else {
    res.redirect('/sprint45b/overview-gsl-not-approved');
  }
});

// TASK 5 - DEATH ARREARS

router.post('/sprint43b/tasks-5', (req, res) => {
  res.redirect('/sprint50/death-arrears-task-1')
});






module.exports = router;
