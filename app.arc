@app
fcc-apis

@static

@http
get /
get /json
get /now
get /echo/:word
post /name


@tables
data
  scopeID *String
  dataID **String
  ttl TTL
