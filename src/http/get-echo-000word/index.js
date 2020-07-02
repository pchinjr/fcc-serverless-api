exports.handler = async function(req){
  let { word } = req.pathParameters
  console.log(req)
  return {
    body: JSON.stringify({ echo: word})
  }
}