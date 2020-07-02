let logger = require('@architect/shared/utils')

exports.handler = async function http(req) {
  logger(req)
  let time = new Date().toString()
  return {
    headers: {
      "content-type":"application/json; charset=utf-8"
    },
    body: `Praise Cage! The time is: ${time}`
  }
}