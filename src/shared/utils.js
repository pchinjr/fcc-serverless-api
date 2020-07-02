function logger(req){
  console.log(req.httpMethod, req.path)
  console.log(req.headers.Host)
  return
}

module.exports = logger