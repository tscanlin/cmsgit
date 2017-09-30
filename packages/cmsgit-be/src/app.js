const http = require('http')

exports.index = function(event, context, callback) {
    http.createServer((req, res) => {
        res.end('Hello World\n')
    }).listen(process.env.PORT)
}