function logger(req){
  console.log(req.headers['X-Forwarded-For'])
  console.log(`${req.httpMethod} ${req.path} -`)
  return
}

module.exports = logger