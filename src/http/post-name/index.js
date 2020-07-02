let arc = require('@architect/functions')

exports.handler = async function (req) {
  let {first, last} = arc.http.helpers.bodyParser(req)
  return {
    headers: {"Content-type": "application/json; charset=UTF-8"},    
    body: JSON.stringify({
      name: `${first} ${last}`
    })
  }
}