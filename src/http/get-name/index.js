exports.handler = async function http(req, res) {
  let { first, last } = req.queryStringParameters
  console.log(req.queryStringParameters)
  return {
    headers: {
      'content-type':'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      "name": `${first} ${last}`
    })
  }
}