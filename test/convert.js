var expect    = require("chai").expect;
var Important = require("../app");

describe("Important text", function() {
	it("makes text 🗻 I M P O R T A N T 🏪", function() {
		var result = Important('test');
		expect(result).to.contain('T E S T');
	});
});
