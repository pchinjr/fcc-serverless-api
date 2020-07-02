function logger(req){
  console.log(`${req.httpMethod} ${req.path} - ${req.headers}`)
  return
}

module.exports = logger