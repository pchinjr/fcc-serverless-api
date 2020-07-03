let logger = require('@architect/shared/utils')

// exports.handler = async function http(req) {
//   logger(req)
//   let time = new Date().toString()
//   return {
//     headers: {
//       "content-type":"application/json; charset=utf-8"
//     },
//     body: `Praise Cage! The time is: ${time}`
//   }
// }

let arc = require('@architect/functions')

// first function call to modify the req object
function time(req, res, next) {
  logger(req) 
  req.time = new Date().toString()
  next()
}

// response function with response object
function http(req, res) {
  let time = `Praise Cage! The time is: ${req.time}`
  res({
    "json": {time: time}
  })
}

exports.handler = arc.http(time, http)