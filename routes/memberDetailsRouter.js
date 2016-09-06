var express = require('express');
var MemberDetails = require('../models/memberDetailsModel.js');

var routes = function(){
    var memberDetailsRouter = express.Router();
    
    memberDetailsRouter.route('/schemes/:caseKey/members')
        .get(function(req, res){
            MemberDetails.find(function(err, memberDetailsList) {
            if (err) {
                res.json({info: 'error during find members', error: err});
            };
            res.json({info: 'members found successfully', data: memberDetailsList});
        });
        }
    );

    memberDetailsRouter.route('/schemes/:caseKey/members/:caseMbrKey')
        .get(function(req, res){
            MemberDetails.findOne({'memberDetails.schemeMember.member.caseMbrKey' : req.params.caseMbrKey}, function(err, memberDetails) {
            if (err) {
                res.json({info: 'error during find member', error: err});
            };
            if (memberDetails) {
                res.json({info: 'member found successfully', data: memberDetails});
            } else {
                res.json({info: 'member not found'});
            }
        });
        }
    );

    return memberDetailsRouter;
};

module.exports = routes;