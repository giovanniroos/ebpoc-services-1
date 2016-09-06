var mongoose = require('mongoose');

var schemeDetailsSchema = mongoose.Schema({

    schemeDetails : {
        scheme : {
            caseKey : String,
            schemeNo : String
        },
        entityNumber : String,
        schemeName : String,
        startDate : String,
        reviewDate : String,
        lifePlan : String,
        industry : String,
        natureOfBusiness : String,
        nsbcIndicator : String,
        adiPeriod : String,
        statusCode : String,
        statusDate : String,
        billing_Sent : String,
        lastUploadDate : String,
        employerName : String,
        costingType : String
    }
});

module.exports = mongoose.model('schemeDetails', schemeDetailsSchema, "schemeDetails");