let arc = require('@architect/functions')

exports.handler = arc.http.proxy.public({}, function(){
  console.log('praise cage')
})
