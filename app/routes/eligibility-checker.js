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

router.post('/current/eligibility-checker/check-eligibility', (req, res) => {
  res.redirect('/current/eligibility-checker/date-of-birth')
})
;

  // Date of birth

  

  router.post('/current/eligibility-checker/date-of-birth', function(req, res) {
    if ( req.body['dob-year'] > 1955) {
      res.redirect('too-young');
    } else {
      res.redirect('residency');
    }
  });

  // Date of birth

  router.post('/current/eligibility-checker/too-young', (req, res) => {
    res.redirect('/current/eligibility-checker/check-eligibility')
  })
  ;

  // Claimed Winter Fuel Payment

  router.post('/current/eligibility-checker/claimed', function(req, res) {
    if ( req.body['claimed'] === 'yes' ) {
      res.redirect('residency-type');
    } else {
      res.redirect('deferral');
    }
  });

  // Living

  router.post('/current/eligibility-checker/residency', function(req, res) {
    if ( req.body['living'] === 'united-kingdom' ) {
      res.redirect('receiving-pc');
    } else {
      res.redirect('overseas');
    }
  });

  // living overseas

  router.post('/current/eligibility-checker/overseas', (req, res) => {
    res.redirect('/current/eligibility-checker/check-eligibility')
  })
  ;


  // Benefits PC?

  router.post('/current/eligibility-checker/receiving-pc', function(req, res) {
    if ( req.body['pension-credit'] === 'yes' ) {
      res.redirect('residency-type-pc');
    } else if ( req.body['pension-credit'] === 'no' ) {
      res.redirect('receiving-sp');
    }
  });

  // Benefits SP?

  router.post('/current/eligibility-checker/receiving-sp', (req, res) =>  {
      res.redirect('residency-type')
  });


// Query

router.post('/current/eligibility-checker/query', function(req, res) {
if ( req.body['query'] === 'eligibility' ) {
  res.redirect('date-of-birth');
} else {
  res.redirect('/legacy/sprint29b/find');
}
});



  // Residency type SP

  router.post('/current/eligibility-checker/residency-type', function(req, res) {
    if ( req.body['where-were-you-living'] === 'hospital' ) {
      res.redirect('hospital');
    } else if ( req.body['where-were-you-living'] === 'carehome' ) {
      res.redirect('care-home');
    } else if ( req.body['where-were-you-living'] === 'no-abode' ) {
      res.redirect('no-abode-under-80');
    } else if ( req.body['where-were-you-living'] === 'prison' ) {
      res.redirect('prison');
    } else {
      res.redirect('who');
    }
  });

  // Residency type PC

  router.post('/current/eligibility-checker/residency-type-pc', function(req, res) {
    if ( req.body['where-were-you-living'] === 'hospital' ) {
      res.redirect('hospital-pc');
    } else if ( req.body['where-were-you-living'] === 'carehome' ) {
      res.redirect('care-home-pc');
    } else if ( req.body['where-were-you-living'] === 'no-abode' ) {
      res.redirect('no-abode-under-80');
    } else if ( req.body['where-were-you-living'] === 'prison' ) {
      res.redirect('prison');
    } else {
      res.redirect('pension-credit');
    }
  });


  // Hospital

  router.post('/current/eligibility-checker/hospital', function(req, res) {
    if ( req.body['hospital-admission'] === 'yes' ) {
      res.redirect('who');
    } else {
      res.redirect('hospital-over-year');
    }
  });

  // Hospital PC

  router.post('/current/eligibility-checker/hospital-pc', function(req, res) {
    if ( req.body['hospital-admission'] === 'yes' ) {
      res.redirect('pension-credit');
    } else {
      res.redirect('hospital-over-year');
    }
  });

    // Care or nursing home 13 weeks

    router.post('/current/eligibility-checker/care-home', function(req, res) {
      if ( req.body['care-home-admission'] === 'yes' ) {
        res.redirect('care-home-full');
      } else {
        res.redirect('care-home-shared');
      }
    });


    // Care or nursing home PC 13 weeks

      router.post('/current/eligibility-checker/care-home-pc', function(req, res) {
        if ( req.body['care-home-admission'] === 'yes' ) {
          res.redirect('shared-payment-pc');
        } else {
          res.redirect('care-home-over-pc');
        }
      });

    // Who (Living with)

      router.post('/current/eligibility-checker/who', function(req, res) {
        if ( req.body['who-do-you-live-with'] === 'yes' ) {
          res.redirect('living-with');
        } else {
          res.redirect('full-payment-under-80');
        }
      });

      router.post('/current/eligibility-checker/living-with-over-80', function(req, res) {
        if ( req.body['live-with-age-over-80'] === 'yes' ) {
          res.redirect('under-80-shared-with-over-80');
        } else {
          res.redirect('over-80-shared');
        }
      });

      // Who (Living with)

        router.post('/current/eligibility-checker/who-pc', function(req, res) {
          if ( req.body['who-do-you-live-with'] === 'yes' ) {
            res.redirect('shared-payment-pc');
          } else {
            res.redirect('receiving-benefits');
          }
        });


      // Living with (age)

        router.post('/current/eligibility-checker/living-with', function(req, res) {
          if ( req.body['live-with-age'] === 'yes' ) {
            res.redirect('living-with-over-80');
          } else {
            res.redirect('full-payment-under-80');
          }
        });

      // Shared payment to overpayment find

      router.post('/current/eligibility-checker/shared-payment', (req, res) => {
        res.redirect('/current/eligibility-checker/find-1')
      })
      ;

      // Shared payment to overpayment find

      router.post('/current/eligibility-checker/find-1', (req, res) => {
        res.redirect('/current/eligibility-checker/find-result-1')
      })
      ;

      // Overpayment branch

      router.post('/current/eligibility-checker/find-result-1', (req, res) => {
        res.redirect('/current/eligibility-checker/security-1')
      })
      ;

      router.post('/current/eligibility-checker/security-1', (req, res) => {
        res.redirect('/current/eligibility-checker/postcode')
      })
      ;

      router.post('/current/eligibility-checker/address-check-1', function(req, res) {
        if ( req.body['address-match'] === 'yes' ) {
          res.redirect('poa-1');
        } else {
          res.redirect('postcode-1');
        }
      });

      router.post('/current/eligibility-checker/poa-1', (req, res) => {
        res.redirect('/current/eligibility-checker/check-1')
      })
      ;

      router.post('/current/eligibility-checker/check-1', (req, res) => {
        res.redirect('/current/eligibility-checker/declaration')
      })
      ;

      // Full payment

      router.post('/current/eligibility-checker/full-payment', (req, res) => {
        res.redirect('/current/eligibility-checker/check-eligibility')
      })
      ;

      // Find a person

      router.post('/current/eligibility-checker/find', (req, res) => {
        res.redirect('/current/eligibility-checker/find-result')
      })
      ;

      // Found person to security

      router.post('/current/eligibility-checker/find-result', (req, res) => {
        res.redirect('/current/eligibility-checker/security')
      })
      ;

      // Found person to security

      router.post('/current/eligibility-checker/security', (req, res) => {
        res.redirect('/current/eligibility-checker/postcode')
      })
      ;


// Who (Care home during Q week)

router.post('/current/eligibility-checker/live-with-carehome', function(req, res) {
  if ( req.body['live-with-carehome'] === 'yes' ) {
    res.redirect('live-with-carehome-13weeks');
  } else {
    res.redirect('shared-payment');
  }
});

// Care home during Q week over 13 weeks?

router.post('/current/eligibility-checker/live-with-carehome-13weeks', function(req, res) {
  if ( req.body['carehome-13weeks'] === 'yes' ) {
    res.redirect('shared-payment');
  } else {
    res.redirect('live-with-anyone-else');
  }
});



router.post('/current/eligibility-checker/live-with-anyone-else', function(req, res) {
  if ( req.body['carehome-other'] === 'yes' ) {
    res.redirect('shared-payment');
  } else {
    res.redirect('full-payment');
  }
});

// Power of attorney

router.post('/current/eligibility-checker/poa', (req, res) => {
  res.redirect('/current/eligibility-checker/check')
})
;

// Postcode underpayment

router.post('/current/eligibility-checker/postcode', (req, res) => {
  res.redirect('/current/eligibility-checker/select-address')
})
;

// Postcode overpayment

router.post('/current/eligibility-checker/postcode-1', (req, res) => {
  res.redirect('/current/eligibility-checker/select-address-1')
})
;

// Check

router.post('/current/eligibility-checker/postcode', (req, res) => {
  res.redirect('/current/eligibility-checker/select-address')
})
;

// Select address to move date

router.post('/current/eligibility-checker/select-address', (req, res) => {
  res.redirect('/current/eligibility-checker/move-date')
})
;

// Select address to move date

router.post('/current/eligibility-checker/select-address-1', (req, res) => {
  res.redirect('/current/eligibility-checker/move-date-1')
})
;

// Move date to power of attorney

router.post('/current/eligibility-checker/move-date', (req, res) => {
  res.redirect('/current/eligibility-checker/poa')
})
;

// Move date to power of attorney 2

router.post('/current/eligibility-checker/move-date-1', (req, res) => {
  res.redirect('/current/eligibility-checker/poa-1')
})
;


// Occupants

router.post('/current/eligibility-checker/occupants', (req, res) => {
  res.redirect('/current/eligibility-checker/check')
})
;

// Check to declaration

router.post('/current/eligibility-checker/check', function(req, res) {
  if ( req.body['change'] === 'yes' ) {
    res.redirect('declaration');
  } else {
    res.redirect('no-change');
  }
});


// Declaration to confirmation

router.post('/current/eligibility-checker/declaration', (req, res) => {
  res.redirect('/current/eligibility-checker/confirmation')
})
;




  //    } else if (something === something) {


  module.exports = router;
