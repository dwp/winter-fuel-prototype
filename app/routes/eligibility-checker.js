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

// Start screen

router.post('/eligibility-checker/check-eligibility', (req, res) => {
  res.redirect('/eligibility-checker/date-of-birth')
})
;

  // Date of birth

  router.post('/eligibility-checker/date-of-birth', (req, res) => {
    res.redirect('/eligibility-checker/residency')
  })
  ;

  // Date of birth

  router.post('/eligibility-checker/too-young', (req, res) => {
    res.redirect('/eligibility-checker/check-eligibility')
  })
  ;

  // Claimed Winter Fuel Payment

  router.post('/eligibility-checker/claimed', function(req, res) {
    if ( req.body['claimed'] === 'yes' ) {
      res.redirect('residency-type');
    } else {
      res.redirect('deferral');
    }
  });

  // Living

  router.post('/eligibility-checker/residency', function(req, res) {
    if ( req.body['living'] === 'united-kingdom' ) {
      res.redirect('receiving-pc');
    } else {
      res.redirect('overseas');
    }
  });

  // living overseas

  router.post('/eligibility-checker/overseas', (req, res) => {
    res.redirect('/eligibility-checker/check-eligibility')
  })
  ;


  // Benefits PC?

  router.post('/eligibility-checker/receiving-pc', function(req, res) {
    if ( req.body['pension-credit'] === 'yes' ) {
      res.redirect('residency-type-pc');
    } else if ( req.body['pension-credit'] === 'no' ) {
      res.redirect('receiving-sp');
    }
  });

  // Benefits SP?

  router.post('/eligibility-checker/receiving-sp', (req, res) =>  {
      res.redirect('residency-type')
  });


// Query

router.post('/eligibility-checker/query', function(req, res) {
if ( req.body['query'] === 'eligibility' ) {
  res.redirect('date-of-birth');
} else {
  res.redirect('/legacy/sprint29b/find');
}
});



  // Residency type SP

  router.post('/eligibility-checker/residency-type', function(req, res) {
    if ( req.body['where-were-you-living'] === 'hospital' ) {
      res.redirect('hospital');
    } else if ( req.body['where-were-you-living'] === 'carehome' ) {
      res.redirect('care-home');
    } else if ( req.body['where-were-you-living'] === 'no-abode' ) {
      if (req.session.data["dob-year"] === "1939"){
        res.redirect('no-abode-over-80');
       } else {
        res.redirect('no-abode-under-80');}
    } else if ( req.body['where-were-you-living'] === 'prison' ) {
      res.redirect('prison');
    } else {
      res.redirect('who');
    }
  });



  // Residency type PC

  router.post('/eligibility-checker/residency-type-pc', function(req, res) {
    if ( req.body['where-were-you-living'] === 'hospital' ) {
      res.redirect('hospital-pc');
    } else if ( req.body['where-were-you-living'] === 'carehome' ) {
      res.redirect('care-home-pc');
    } else if ( req.body['where-were-you-living'] === 'no-abode' ) {
      if (req.session.data["dob-year"] === "1939"){
        res.redirect('no-abode-over-80');
       } else {
        res.redirect('no-abode-under-80');}
    } else if ( req.body['where-were-you-living'] === 'prison' ) {
      res.redirect('prison');
    } else if (req.session.data["dob-year"] === "1939"){
      res.redirect('over-80-pension-credit-payment');
     } else {
      res.redirect('under-80-pension-credit-payment');
  }
  });


  // Hospital

  router.post('/eligibility-checker/hospital', function(req, res) {
    if ( req.body['hospital-admission'] === 'yes' ) {
      res.redirect('who');
    } else {
      res.redirect('hospital-over-year');
    }
  });

  // Hospital PC

  router.post('/eligibility-checker/hospital-pc', function(req, res) {
    if ( req.body['hospital-admission'] === 'yes' ) {
      res.redirect('pension-credit');
    } else {
      res.redirect('hospital-over-year');
    }
  });

    // Care or nursing home 13 weeks

    router.post('/eligibility-checker/care-home', function(req, res) {
      if ( req.body['care-home-admission'] === 'yes' ) {
        if (req.session.data["dob-year"] === "1939") {
         res.redirect('over-80-care-home-no-pc');
        } else {
         res.redirect('under-80-care-home-no-pc');}
      } else {
        res.redirect('care-home-shared');
      }
    });


    // Care or nursing home PC 13 weeks

      router.post('/eligibility-checker/care-home-pc', function(req, res) {
        if ( req.body['care-home-admission'] === 'yes' ) {
          if (req.session.data["dob-year"] === "1939") {
            res.redirect('over-80-care-home-pc');
           } else {
            res.redirect('under-80-care-home-pc');}
        } else {
          res.redirect('care-home-over-pc');
        }
      });

    // Who (Living with)

      router.post('/eligibility-checker/who', function(req, res) {
        if ( req.body['who-do-you-live-with'] === 'yes' ) {
          res.redirect('living-with');
        } else if (req.session.data["dob-year"] === "1939"){
          res.redirect('full-payment-over-80');
         } else {
          res.redirect('full-payment-under-80');
      }
      });

      // Who (Living with)

        router.post('/eligibility-checker/who-pc', function(req, res) {
          if ( req.body['who-do-you-live-with'] === 'yes' ) {
            res.redirect('shared-payment-pc');
          } else {
            res.redirect('receiving-benefits');
          }
        });


      // Living with (age)

        router.post('/eligibility-checker/living-with', function(req, res) {
          if ( req.body['live-with-age'] === 'yes' ) {
            if (req.session.data["dob-year"] === "1939") {
              res.redirect('living-with-over-80');
             } else {
              res.redirect('shared-payment');}
          } else {
            if (req.session.data["dob-year"] === "1939") {
              res.redirect('full-payment-over-80');
             } else {
              res.redirect('full-payment-under-80');}
          }
        });

      // Living with over 80

      router.post('/eligibility-checker/living-with-over-80', function(req, res) {
        if ( req.body['live-with-age-over-80'] === 'yes' ) {
          if (req.session.data["dob-year"] === "1939") {
            res.redirect('over-80-shared-over-80');
           } else {
            res.redirect('under-80-shared-with-over-80');}
        } else {
          res.redirect('over-80-shared');
        }
      });

      // Shared payment to overpayment find

      router.post('/eligibility-checker/shared-payment', (req, res) => {
        res.redirect('/eligibility-checker/find-1')
      })
      ;

      // Shared payment to overpayment find

      router.post('/eligibility-checker/find-1', (req, res) => {
        res.redirect('/eligibility-checker/find-result-1')
      })
      ;

      // Overpayment branch

      router.post('/eligibility-checker/find-result-1', (req, res) => {
        res.redirect('/eligibility-checker/security-1')
      })
      ;

      router.post('/eligibility-checker/security-1', (req, res) => {
        res.redirect('/eligibility-checker/postcode')
      })
      ;

      router.post('/eligibility-checker/address-check-1', function(req, res) {
        if ( req.body['address-match'] === 'yes' ) {
          res.redirect('poa-1');
        } else {
          res.redirect('postcode-1');
        }
      });

      router.post('/eligibility-checker/poa-1', (req, res) => {
        res.redirect('/eligibility-checker/check-1')
      })
      ;

      router.post('/eligibility-checker/check-1', (req, res) => {
        res.redirect('/eligibility-checker/declaration')
      })
      ;

      // Full payment

      router.post('/eligibility-checker/full-payment', (req, res) => {
        res.redirect('/eligibility-checker/check-eligibility')
      })
      ;

      // Find a person

      router.post('/eligibility-checker/find', (req, res) => {
        res.redirect('/eligibility-checker/find-result')
      })
      ;

      // Found person to security

      router.post('/eligibility-checker/find-result', (req, res) => {
        res.redirect('/eligibility-checker/security')
      })
      ;

      // Found person to security

      router.post('/eligibility-checker/security', (req, res) => {
        res.redirect('/eligibility-checker/postcode')
      })
      ;


// Who (Care home during Q week)

router.post('/eligibility-checker/live-with-carehome', function(req, res) {
  if ( req.body['live-with-carehome'] === 'yes' ) {
    res.redirect('live-with-carehome-13weeks');
  } else {
    res.redirect('shared-payment');
  }
});

// Care home during Q week over 13 weeks?

router.post('/eligibility-checker/live-with-carehome-13weeks', function(req, res) {
  if ( req.body['carehome-13weeks'] === 'yes' ) {
    res.redirect('shared-payment');
  } else {
    res.redirect('live-with-anyone-else');
  }
});



router.post('/eligibility-checker/live-with-anyone-else', function(req, res) {
  if ( req.body['carehome-other'] === 'yes' ) {
    res.redirect('shared-payment');
  } else {
    res.redirect('full-payment');
  }
});

// Power of attorney

router.post('/eligibility-checker/poa', (req, res) => {
  res.redirect('/eligibility-checker/check')
})
;

// Postcode underpayment

router.post('/eligibility-checker/postcode', (req, res) => {
  res.redirect('/eligibility-checker/select-address')
})
;

// Postcode overpayment

router.post('/eligibility-checker/postcode-1', (req, res) => {
  res.redirect('/eligibility-checker/select-address-1')
})
;

// Check

router.post('/eligibility-checker/postcode', (req, res) => {
  res.redirect('/eligibility-checker/select-address')
})
;

// Select address to move date

router.post('/eligibility-checker/select-address', (req, res) => {
  res.redirect('/eligibility-checker/move-date')
})
;

// Select address to move date

router.post('/eligibility-checker/select-address-1', (req, res) => {
  res.redirect('/eligibility-checker/move-date-1')
})
;

// Move date to power of attorney

router.post('/eligibility-checker/move-date', (req, res) => {
  res.redirect('/eligibility-checker/poa')
})
;

// Move date to power of attorney 2

router.post('/eligibility-checker/move-date-1', (req, res) => {
  res.redirect('/eligibility-checker/poa-1')
})
;


// Occupants

router.post('/eligibility-checker/occupants', (req, res) => {
  res.redirect('/eligibility-checker/check')
})
;

// Check to declaration

router.post('/eligibility-checker/check', function(req, res) {
  if ( req.body['change'] === 'yes' ) {
    res.redirect('declaration');
  } else {
    res.redirect('no-change');
  }
});


// Declaration to confirmation

router.post('/eligibility-checker/declaration', (req, res) => {
  res.redirect('/eligibility-checker/confirmation')
})
;




  //    } else if (something === something) {


  module.exports = router;
