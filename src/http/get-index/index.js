let arc = require('@architect/functions')

exports.handler = arc.http.proxy.public()
