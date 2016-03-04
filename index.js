module.exports = function(project, data) {
	var Handlebars = require('handlebars')
	var fs = require('fs')

	var source = fs.readFileSync(__dirname + '/templates/' + project + '.hbs', 'UTF-8')
	var template = Handlebars.compile(source)

	return template(data)
}
