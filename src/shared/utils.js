function logger(req){
  console.log(`${req.httpMethod} ${req.path} - ${req.headers['X-Forwarded-For']}`)
  return
}

module.exports = logger