function logger(req){
  console.log(`${req.httpMethod} ${req.path} - ${req.headers['CloudFront-Viewer-Country']}`)
  return
}

module.exports = logger