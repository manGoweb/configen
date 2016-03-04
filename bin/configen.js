var argv = require('yargs')
	.usage('Usage: configen [template] key1=value1 key2=value2')
	.help('h')
	.alias('h', 'help')
	.argv

var project = argv._.shift()
var data = {}

var pair
for(var k in argv._) {
	pair = argv._[k].split('=')
	data[pair[0]] = pair[1]
}

console.log(require('../index.js')(project, data))
