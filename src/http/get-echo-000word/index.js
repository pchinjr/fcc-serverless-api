exports.handler = async function http(req){
  let { word } = req.pathParameters
  console.log(req)
  return {
    headers: {
      'content-type':'application/json; charset=utf-8'
    },
    body: JSON.stringify({ echo: word})
  }
}