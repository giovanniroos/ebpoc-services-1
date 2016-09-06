var SchemeDetails = require('../models/schemeDetailsModel.js');

module.exports = function(app) {
    
    /* Read */
    app.get('/api/document/v1/schemes', function (req, res) {
        SchemeDetails.find(function(err, schemeDetailsList) {
            if (err) {
                res.json({info: 'error during find schemes', error: err});
            };
            res.json({info: 'schemes found successfully', data: schemeDetailsList});
        });
    });

    app.get('/api/document/v1/schemes/:caseKey', function (req, res) {
        SchemeDetails.findOne({'schemeDetails.scheme.caseKey' : req.params.caseKey}, function(err, schemeDetails) {
            if (err) {
                res.json({info: 'error during find scheme', error: err});
            };
            if (schemeDetails) {
                res.json({info: 'scheme found successfully', data: schemeDetails});
            } else {
                res.json({info: 'scheme not found'});
            }
        });
    });
};
