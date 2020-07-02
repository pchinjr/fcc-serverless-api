function logger(req){
  console.log(req.headers)
  console.log(`${req.httpMethod} ${req.path} -`)
  return
}

module.exports = logger