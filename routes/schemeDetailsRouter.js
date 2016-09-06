var express = require('express');
var SchemeDetails = require('../models/schemeDetailsModel.js');

var routes = function(){
    var schemeDetailsRouter = express.Router();
    
    schemeDetailsRouter.route('/schemes')
        .get(function(req, res){
            SchemeDetails.find(function(err, schemeDetailsList) {
                if (err) {
                    res.json({info: 'error during find schemes', error: err});
                };
                res.json({info: 'schemes found successfully', data: schemeDetailsList});
            });
        }
    );

    schemeDetailsRouter.route('/schemes/:caseKey')
        .get(function(req, res){
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
        }
    );

    return schemeDetailsRouter;
};

module.exports = routes;