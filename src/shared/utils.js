function logger(req){
  console.log(`Method: ${req.httpMethod} - Path: ${req.path} - IP: ${req.headers['X-Forwarded-For']}`)
  return
}

module.exports = logger