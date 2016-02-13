var ZSchema = require("z-schema");
var validator = new ZSchema();
var fs = require('fs');
var path = require('path');

var schema = JSON.parse(fs.readFileSync('user.json', "utf8"));
var json = JSON.parse(fs.readFileSync('user-test.json', "utf8"));

ZSchema.setSchemaReader(function (uri) {
    var someFilename = path.resolve(__dirname, uri + ".json");
    return JSON.parse(fs.readFileSync(someFilename, "utf8"));
});

validator.validate(json, schema, function(err, report) {
	if (err) {
		console.log("error");
		console.log(err);
	} else {
		console.log(report);
	}
});

