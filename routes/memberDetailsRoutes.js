var MemberDetails = require('../models/memberDetailsModel.js');

module.exports = function(app) {
    
    /* Read */
    app.get('/api/document/v1/schemes/:caseKey/members', function (req, res) {
        MemberDetails.find(function(err, memberDetailsList) {
            if (err) {
                res.json({info: 'error during find members', error: err});
            };
            res.json({info: 'members found successfully', data: memberDetailsList});
        });
    });

    app.get('/api/document/v1/schemes/:caseKey/members/:caseMbrKey', function (req, res) {
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
    });
};
