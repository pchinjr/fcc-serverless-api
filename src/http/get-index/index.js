let arc = require('@architect/functions')

exports.handler = arc.http.proxy( { }, console.log('Praise Cage'))
