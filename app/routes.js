const express = require('express')
const router = express.Router()

// copy the const name and the file path to new version
const eligibilitychecker = require('./routes/eligibility-checker');
const payDeathArrears = require('./routes/tasks-pay-death-arrears');




const legacy/sprint15 = require('./routes/legacy/sprint15');
const legacy/sprint15b = require('./routes/legacy/sprint15b');
const legacy/sprint17 = require('./routes/legacy/sprint17');
const legacy/sprint18 = require('./routes/legacy/sprint18');
const legacy/sprint18b = require('./routes/legacy/sprint18b');
const legacy/sprint18c = require('./routes/legacy/sprint18c');
const legacy/sprint19 = require('./routes/legacy/sprint19');
const legacy/sprint19b = require('./routes/legacy/sprint19b');
const legacy/sprint20 = require('./routes/legacy/sprint20');
const legacy/sprint20b = require('./routes/legacy/sprint20b');
const legacy/sprint20c = require('./routes/legacy/sprint20c');
const legacy/sprint21 = require('./routes/legacy/sprint21');
const legacy/sprint21b = require('./routes/legacy/sprint21b');
const legacy/sprint21c = require('./routes/legacy/sprint21c');
const legacy/sprint21d = require('./routes/legacy/sprint21d');
const legacy/sprint22a = require('./routes/legacy/sprint22a');
const legacy/sprint22 = require('./routes/legacy/sprint22');
const legacy/sprint22b = require('./routes/legacy/sprint22b');
const legacy/sprint22c = require('./routes/legacy/sprint22c');
const legacy/sprint22d = require('./routes/legacy/sprint22d');
const legacy/sprint23 = require('./routes/legacy/sprint23');
const legacy/sprint23b = require('./routes/legacy/sprint23b');
const legacy/sprint24 = require('./routes/legacy/sprint24');
const legacy/sprint24b = require('./routes/legacy/sprint24b');
const returnedpayment = require('./routes/returnedpayment');
const legacy/sprint26 = require('./routes/legacy/sprint26');
const legacy/sprint27 = require('./routes/legacy/sprint27');
const legacy/sprint27b = require('./routes/legacy/sprint27b');
const legacy/sprint27c = require('./routes/legacy/sprint27c');
const legacy/sprint28 = require('./routes/legacy/sprint28');
const legacy/sprint28b = require('./routes/legacy/sprint28b');
const legacy/sprint28c = require('./routes/legacy/sprint28c');
const legacy/sprint29b = require('./routes/legacy/sprint29b');
const legacy/sprint30a = require('./routes/legacy/sprint30a');
const legacy/sprint30b = require('./routes/legacy/sprint30b');
const legacy/sprint30c = require('./routes/legacy/sprint30c');
const legacy/sprint31a = require('./routes/legacy/sprint31a');
const legacy/sprint31b = require('./routes/legacy/sprint31b');
const legacy/sprint31c = require('./routes/legacy/sprint31c');
const legacy/sprint31d = require('./routes/legacy/sprint31d');
const legacy/sprint32a = require('./routes/legacy/sprint32a');
const legacy/sprint32b = require('./routes/legacy/sprint32b');
const legacy/sprint32c = require('./routes/legacy/sprint32c');
const legacy/sprint32d = require('./routes/legacy/sprint32d');
const legacy/sprint32e = require('./routes/legacy/sprint32e');
const legacy/sprint32f = require('./routes/legacy/sprint32f');
const legacy/sprint33a = require('./routes/legacy/sprint33a');
const legacy/sprint33b = require('./routes/legacy/sprint33b');
const legacy/sprint33c = require('./routes/legacy/sprint33c');
const legacy/sprint33d = require('./routes/legacy/sprint33d');
const legacy/sprint35 = require('./routes/legacy/sprint35');
const legacy/sprint35b = require('./routes/legacy/sprint35b');
const legacy/sprint35c = require('./routes/legacy/sprint35c');
const legacy/sprint35d = require('./routes/legacy/sprint35d');
const legacy/sprint35e = require('./routes/legacy/sprint35e');
const emergencypayments = require('./routes/emergencypayments');
const legacy/sprint37 = require('./routes/legacy/sprint37');
const legacy/sprint37b = require('./routes/legacy/sprint37b');
const legacy/sprint38 = require('./routes/legacy/sprint38');
const legacy/sprint39c = require('./routes/legacy/sprint39c');
const legacy/sprint40a = require('./routes/legacy/sprint40a');
const legacy/sprint40b = require('./routes/legacy/sprint40b');
const legacy/sprint41 = require('./routes/legacy/sprint41');
const legacy/sprint41b = require('./routes/legacy/sprint41b');
const legacy/sprint42b = require('./routes/legacy/sprint42b');
const legacy/sprint42c = require('./routes/legacy/sprint42c');
const legacy/sprint43 = require('./routes/legacy/sprint43');
const legacy/sprint43b = require('./routes/legacy/sprint43b');
const legacy/sprint43d = require('./routes/legacy/sprint43d');
const legacy/sprint45 = require('./routes/legacy/sprint45');
const legacy/sprint45b = require('./routes/legacy/sprint45b');
const legacy/sprint46 = require('./routes/legacy/sprint46');
const legacy/sprint46b = require('./routes/legacy/sprint46b');
const legacy/sprint47b = require('./routes/legacy/sprint47b');
const legacy/sprint49 = require('./routes/legacy/sprint49');
const legacy/sprint49b = require('./routes/legacy/sprint49b');
const legacy/sprint49c = require('./routes/legacy/sprint49c');
const legacy/sprint49d = require('./routes/legacy/sprint49d');
const legacy/sprint50 = require('./routes/legacy/sprint50');
const legacy/sprint50b = require('./routes/legacy/sprint50b');
const legacy/sprint50c = require('./routes/legacy/sprint50c');
const legacy/sprint49e = require('./routes/legacy/sprint49e');
const legacy/sprint51 = require('./routes/legacy/sprint51');
const legacy/sprint51b = require('./routes/legacy/sprint51b');
const legacy/sprint51c = require('./routes/legacy/sprint51c');
const legacy/sprint51d = require('./routes/legacy/sprint51d');
const legacy/sprint52 = require('./routes/legacy/sprint52');
const legacy/sprint52b = require('./routes/legacy/sprint52b');
const legacy/sprint52c = require('./routes/legacy/sprint52c');
const legacy/sprint52d = require('./routes/legacy/sprint52d');
const legacy/sprint52e = require('./routes/legacy/sprint52e');
const legacy/sprint52f = require('./routes/legacy/sprint52f');
const legacy/sprint52g = require('./routes/legacy/sprint52g');
const legacy/sprint53 = require('./routes/legacy/sprint53');
const legacy/sprint55 = require('./routes/legacy/sprint55');
const legacy/sprint55b = require('./routes/legacy/sprint55b');
const legacy/sprint56 = require('./routes/legacy/sprint56');
const legacy/sprint57 = require('./routes/legacy/sprint57');
const legacy/sprint57b = require('./routes/legacy/sprint57b');
const legacy/sprint57c = require('./routes/legacy/sprint57c');
const legacy/sprint59 = require('./routes/legacy/sprint59');
const legacy/sprint59b = require('./routes/legacy/sprint59b');
const legacy/sprint59c = require('./routes/legacy/sprint59c');
const legacy/sprint59d = require('./routes/legacy/sprint59d');
const legacy/sprint59e = require('./routes/legacy/sprint59e');
const legacy/sprint59f = require('./routes/legacy/sprint59f');
const legacy/sprint60 = require('./routes/legacy/sprint60');
const legacy/sprint60b = require('./routes/legacy/sprint60b');
const legacy/sprint60c = require('./routes/legacy/sprint60c');
const legacy/sprint62 = require('./routes/legacy/sprint62');
const legacy/sprint62b = require('./routes/legacy/sprint62b');
const legacy/sprint62c = require('./routes/legacy/sprint62c');
const legacy/sprint63 = require('./routes/legacy/sprint63');
const legacy/sprint63c = require('./routes/legacy/sprint63c');
const legacy/sprint63d = require('./routes/legacy/sprint63d');
const legacy/sprint63e = require('./routes/legacy/sprint63e');
const legacy/sprint63f = require('./routes/legacy/sprint63f');
const legacy/sprint64 = require('./routes/legacy/sprint64');
const legacy/sprint64b = require('./routes/legacy/sprint64b');
const legacy/sprint65 = require('./routes/legacy/sprint65');
const legacy/sprint65c = require('./routes/legacy/sprint65c');
const legacy/sprint66 = require('./routes/legacy/sprint66');
const legacy/sprint66b = require('./routes/legacy/sprint66b');
const legacy/sprint68 = require('./routes/legacy/sprint68');
const legacy/sprint68b = require('./routes/legacy/sprint68b');
const legacy/sprint68c = require('./routes/legacy/sprint68c');
const legacy/sprint69 = require('./routes/legacy/sprint69');
const legacy/sprint69b = require('./routes/legacy/sprint69b');


//copy the router use and update the legacy/sprint version
router.use(eligibilitychecker);
router.use(payDeathArrears);



router.use(legacy/sprint15);
router.use(legacy/sprint15b);
router.use(legacy/sprint17);
router.use(legacy/sprint18);
router.use(legacy/sprint18b);
router.use(legacy/sprint18c);
router.use(legacy/sprint19);
router.use(legacy/sprint19b);
router.use(legacy/sprint20);
router.use(legacy/sprint20b);
router.use(legacy/sprint20c);
router.use(legacy/sprint21);
router.use(legacy/sprint21b);
router.use(legacy/sprint21c);
router.use(legacy/sprint21d);
router.use(legacy/sprint22);
router.use(legacy/sprint22a);
router.use(legacy/sprint22b);
router.use(legacy/sprint22c);
router.use(legacy/sprint22d);
router.use(legacy/sprint23);
router.use(legacy/sprint23b);
router.use(legacy/sprint24);
router.use(legacy/sprint24b);
router.use(returnedpayment);
router.use(legacy/sprint26);
router.use(legacy/sprint27);
router.use(legacy/sprint27b);
router.use(legacy/sprint27c);
router.use(legacy/sprint28);
router.use(legacy/sprint28b);
router.use(legacy/sprint28c);
router.use(legacy/sprint29b);
router.use(legacy/sprint30a);
router.use(legacy/sprint30b);
router.use(legacy/sprint30c);
router.use(legacy/sprint31a);
router.use(legacy/sprint31b);
router.use(legacy/sprint31c);
router.use(legacy/sprint31d);
router.use(legacy/sprint32a);
router.use(legacy/sprint32b);
router.use(legacy/sprint32c);
router.use(legacy/sprint32d);
router.use(legacy/sprint32e);
router.use(legacy/sprint32f);
router.use(legacy/sprint33a);
router.use(legacy/sprint33b);
router.use(legacy/sprint33c);
router.use(legacy/sprint33d);
router.use(legacy/sprint35);
router.use(legacy/sprint35b);
router.use(legacy/sprint35c);
router.use(legacy/sprint35d);
router.use(legacy/sprint35e);
router.use(emergencypayments);
router.use(legacy/sprint37);
router.use(legacy/sprint37b);
router.use(legacy/sprint38);
router.use(legacy/sprint39c);
router.use(legacy/sprint40a);
router.use(legacy/sprint40b);
router.use(legacy/sprint41);
router.use(legacy/sprint41b);
router.use(legacy/sprint42b);
router.use(legacy/sprint42c);
router.use(legacy/sprint43);
router.use(legacy/sprint43b);
router.use(legacy/sprint43d);
router.use(legacy/sprint45);
router.use(legacy/sprint45b);
router.use(legacy/sprint46);
router.use(legacy/sprint46b);
router.use(legacy/sprint47b);
router.use(legacy/sprint49);
router.use(legacy/sprint49b);
router.use(legacy/sprint49c);
router.use(legacy/sprint49d);
router.use(legacy/sprint50);
router.use(legacy/sprint50b);
router.use(legacy/sprint50c);
router.use(legacy/sprint49e);
router.use(legacy/sprint51);
router.use(legacy/sprint51b);
router.use(legacy/sprint51c);
router.use(legacy/sprint51d);
router.use(legacy/sprint52);
router.use(legacy/sprint52b);
router.use(legacy/sprint52c);
router.use(legacy/sprint52d);
router.use(legacy/sprint52e);
router.use(legacy/sprint52f);
router.use(legacy/sprint52g);
router.use(legacy/sprint53);
router.use(legacy/sprint55);
router.use(legacy/sprint55b);
router.use(legacy/sprint56);
router.use(legacy/sprint57);
router.use(legacy/sprint57b);
router.use(legacy/sprint57c);
router.use(legacy/sprint59);
router.use(legacy/sprint59b);
router.use(legacy/sprint59c);
router.use(legacy/sprint59d);
router.use(legacy/sprint59e);
router.use(legacy/sprint59f);
router.use(legacy/sprint60);
router.use(legacy/sprint60b);
router.use(legacy/sprint60c);
router.use(legacy/sprint62);
router.use(legacy/sprint62b);
router.use(legacy/sprint62c);
router.use(legacy/sprint63);
router.use(legacy/sprint63c);
router.use(legacy/sprint63d);
router.use(legacy/sprint63e);
router.use(legacy/sprint63f);
router.use(legacy/sprint64);
router.use(legacy/sprint64b);
router.use(legacy/sprint65);
router.use(legacy/sprint65c);
router.use(legacy/sprint66);
router.use(legacy/sprint66b);
router.use(legacy/sprint68);
router.use(legacy/sprint68b);
router.use(legacy/sprint68c);
router.use(legacy/sprint69);
router.use(legacy/sprint69b);


router.post('*', function (req, res, next) {
  console.log(req.body);

  if (req.body['next-page']) {
    res.redirect(req.body['next-page']);
  } else {
    next();
  }
});

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line
// Branching

router.get('/legacy/sprint3/qq123456c_main2', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var dob = req.query.dob

  if (dob === 'false') {
    // Redirect to the relevant page
    res.redirect('/legacy/sprint3/qq123456c_dob')
  }

  else {
    // If over18 is any other value (or is missing) render the page requested
    res.render('legacy/sprint3/qq123456c_main2')
  }
})

router.get('/legacy/sprint3/qq123456c_dob2', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var dob2 = req.query.dob2

  if (dob2 === 'false') {
    // Redirect to the relevant page
    res.redirect('/legacy/sprint3/qq123456c_evidence')
  } else {

    res.render('legacy/sprint3/qq123456c_dob2')
  }
})

router.post(`/development/payment-letter-router`, (req, res) => { // router name
  const privacyPolicy = req.session.data['payment-letter-yn']  // name of data / id name

  if (privacyPolicy === 'Yes') { // name of data / + answer
    res.redirect(`/development/has-letter`)
  } else {
    res.redirect(`/development/post-code-lookup`)
  }
})


///// legacy/sprint 17 routes ////

router.get('/legacy/sprint17/', function(req, res) {
  res.render('./legacy/sprint17/whattodo')
})

router.post('/legacy/sprint15/international/declaration', function(req, res) {
  res.redirect('/legacy/sprint15/international/applicationcomplete')
}) 

module.exports = router
