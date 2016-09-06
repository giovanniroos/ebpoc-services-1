var mongoose = require('mongoose');

var memberDetailsSchema = mongoose.Schema({

    memberDetails: {
		schemeMember: {
			scheme: {
				caseKey: String,
				schemeNo: String
			},
			member: {
				caseMbrKey: String,
				memberNo: String
			}
		},
		person: {
			entityNo: String,
			title: String,
			initials: String,
			firstName: String,
			lastName: String,
			dateOfBirth: String,
			gender: String,
			identityNo: String,
			passportNo: String,
			countryOfIssue: String
		},
		joinedDate: String,
		memberGroup: String,
		branchName:  String,
		priorMemberNo: String,
		payrollNo: String,
		earnings: String,
		smartService: String,
		billingSent: String,
		retirementDate: String,
		underwritingRequired: String,
		memberStatus: {
			statusCode: String,
			status: String,
			statusDate: String
		},
		vitality: {
			status: String,
			billed: String,
			option: String,
			fclMultiplier: String
		}
	}


    
});

module.exports = mongoose.model('memberDetails', memberDetailsSchema, 'memberDetails');