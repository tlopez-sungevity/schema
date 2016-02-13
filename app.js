var ZSchema = require("z-schema");
var validator = new ZSchema();
var fs = require('fs');

var schema = JSON.parse(fs.readFileSync('user.json', "utf8"));
var json = JSON.parse(fs.readFileSync('user-test.json', "utf8"));

// ZSchema.setSchemaReader(function (uri) {
//     var someFilename = path.resolve(__dirname, './' + uri + ".json");
//     console.log(someFilename);
//     return JSON.parse(fs.readFileSync(someFilename, "utf8"));
// });

var valid = validator.validate(json, schema);

console.log(valid);
console.log(schema);